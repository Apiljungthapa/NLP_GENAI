# Fine-Tuning Large Language Models (LLMs) on Colab's Free GPU (Including 7B Parameters with Inference)

Welcome! Here, you'll learn how to fine-tune any large language model (LLM) for your specific needs using your own dataset. Whether it's for your business, school, or any other endeavor, you can create a customized Q&A chatbot tailored to your requirements. Let's explore how you can structure a chat template and fine-tune an LLM model using Hugging Face Transformers.


## 1.1 Access Chat Templates for Fine-Tuning Various Models

| Notebook File                           | Link              |
|----------------------------------------|-------------------
| Get Chat Template for LLMs Fine-Tuning (Code) | [🔗]()   | 


## a) Steps for Fine-Tuning Llama 2:

Steps | Description | Resources
------|-------------|----------
1) | Gather questions and answers in a text file | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/LLAMA2_FINETUNED_MODEL/train.txt)
2) | Share the prepared dataset on Hugging Face's repository | [🔗](https://huggingface.co/datasets/Jevvan123/lmmma_2dataset)
3) | Execute the provided Jupyter code to fine-tune Llama 2 | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/LLAMA2_FINETUNED_MODEL/fine_tune_models.ipynb)
4) | Evaluate the performance of the fine-tuned model | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/LLAMA2_FINETUNED_MODEL/Testing_LLMA2.ipynb)

## b) Steps for Fine-Tuning Gemma:

Steps | Description | Resources
------|-------------|----------
1) | Organize questions and answers in a text file | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/gemma%20model/test.txt)
2) | Share the formatted dataset on Hugging Face's repository | [🔗](https://huggingface.co/datasets/Jevvan123/Gemma_huba_brandset)
3) | Run the provided Jupyter code to fine-tune Gemma | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/gemma%20model/Fine_tuned_Model_gemmamodel.ipynb)
4) | Assess the performance of the fine-tuned model | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/gemma%20model/Testing_gemma_model.ipynb)

## c) Steps for Fine-Tuning Mistral (7 billion parameters model) on Colab's Free GPU with Inference:

Steps | Description | Resources
------|-------------|----------
1) | Execute the provided Jupyter code to fine-tune Mistral and upload adapter files to Hugging Face's models | [🔗](https://github.com/Apil12/NLP_GENAI/blob/master/Mixtral_model/Mixtral_finetuned_model.ipynb)

# D) Quantization of LLM To GGUF format and Testing it

## Quantization GGUF (GPT-Generated Unified Format)

## Conversion Of LLM Into GGUF Format 🛠️🪛
*File:* [file link](https://github.com/Apiljungthapa/NLP_GENAI/blob/master/GGUF%20Model%20File/Quantize_LLMs_to_GGUF.ipynb) 

## Testing GGUF Model using llama_cpp(Llama), llama_index(LlamaCPP), langchain(LlamaCpp) 📝
*Testing Tools:*
*File:* [file link](https://github.com/Apiljungthapa/NLP_GENAI/blob/master/GGUF%20Model%20File/Testing_GGUF_file_with_different_methods.ipynb) 
1. llama_cpp (Llama)
2. llama_index (LlamaCPP)
3. langchain (LlamaCpp)

## Testing GGUF Model using C-Transformers 📝
*Testing Tools:*
- C-Transformers: [Tool link](https://github.com/Apiljungthapa/NLP_GENAI/blob/master/GGUF%20Model%20File/Tessting_using_c_transformers.ipynb
)
