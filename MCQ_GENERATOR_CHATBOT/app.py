from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
import os
from dotenv import load_dotenv
import streamlit as st
from langchain_core.prompts import ChatPromptTemplate


# Load environment variables from .env file
load_dotenv()



# Correctly accessing environment variables using os.getenv
os.environ['OPENAI_API_KEY'] = os.getenv('OPENAI_API_KEY')


# os.environ['GROQ_API_KEY'] = os.getenv('GROQ_API_KEY')


os.environ['LANGCHAIN_API_KEY'] = os.getenv('LANGCHAIN_API_KEY')
os.environ['LANGCHAIN_TRACING_V2'] = "true"



# Define llm model
llm = ChatOpenAI(model_name="gpt-4-turbo") 




# Define chat prompt template
prompt_template = ChatPromptTemplate.from_messages([
    ("system", "You are an expert MCQ generator. When a user provides a topic, you will generate a multiple-choice question related to that topic. The question should include four options, labeled A, B, C, and D, with only one correct answer."),
    ("user", "Generate an MCQ for the topic: {topic}")
])



# Function to generate MCQ
# Function to generate MCQ
def generate_mcq(topic: str) -> dict:
    prompt = prompt_template.format(topic=topic)

    response = llm.invoke(prompt)
    
    # Access the content of the AIMessage object
    response_text = response.content

    print(response_text)
    
    # Extract the question
    question = response_text.split("\n\n")[0].replace("Question: ", "").strip()
    
    # Extract the options
    options = [opt.strip() for opt in response_text.split("\n\n")[1].split("\n")]
    
    # Extract the correct answer
    correct_answer = response_text.split("\n\n")[2].replace("Correct answer: ", "").strip()
    
    return {
        "question": question,
        "options": options,
        "answer": correct_answer
    }

# Streamlit UI
st.title("MCQ GENERATOR CHATBOT !!")

# Step 1: User enters a topic
topic = st.text_input("Enter a topic for MCQ generation")

if topic:
    # Generate the first MCQ
    mcq = generate_mcq(topic)
    
    # Initialize session state to keep track of MCQs and scores
    if "mcqs" not in st.session_state:
        st.session_state.mcqs = []
        st.session_state.current_index = 0
        st.session_state.correct_answers = 0
        st.session_state.total_questions = 0

    # Store the generated MCQ
    st.session_state.mcqs.append(mcq)
    st.session_state.total_questions += 1

    # Display the current question
    st.write(f"Q{st.session_state.current_index + 1}: {st.session_state.mcqs[st.session_state.current_index]['question']}")

    # Display options as radio buttons
    selected_option = st.radio(
        "Choose your answer:",
        options=st.session_state.mcqs[st.session_state.current_index]['options']
    )

    # Submit button
    if st.button("Submit Answer"):
        correct_answer = st.session_state.mcqs[st.session_state.current_index]['answer']

        # Check if the selected answer is correct
        if selected_option.startswith(correct_answer[0]):
            st.success(f"Correct! The right answer is {correct_answer}.")
            st.session_state.correct_answers += 1
        else:
            st.error(f"Wrong! The correct answer is {correct_answer}.")
        
        # Move to the next question
        st.session_state.current_index += 1

        if st.session_state.current_index < st.session_state.total_questions:
            st.write(f"Next question:")
        else:
            st.write("No more questions! Please enter a new topic to generate more MCQs.")

    # Show final score
    if st.button("Show Final Score"):
        st.write(f"Your final score is {st.session_state.correct_answers} out of {st.session_state.total_questions}.")
        # Reset session state for new round
        st.session_state.current_index = 0
        st.session_state.correct_answers = 0
        st.session_state.total_questions = 0
        st.session_state.mcqs = []