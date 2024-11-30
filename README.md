# Fine-Tuning Large Language Model (LLMs) on Colab Free GPU's (Including 7B Parameters with Inference's)

Welcome! Here, you'll learn how to fine-tune any large language model (LLM) for your specific needs using your own dataset. Whether it's for your business, school, or any other endeavor, you can create a customized Q&A chatbot tailored to your requirements. Let's explore how you can structure a chat template and fine-tune an LLM model using Hugging Face Transformers.


## 1.1 Access Chat Template for Fine-Tuning Various Models

| Notebook File                           | Link              |
|----------------------------------------|-------------------
| Get Chat Template for LLMs Fine-Tuning (Code) | [🔗]()      

# Fine-Tuning Steps for Various Model

### a) Steps for Fine-Tuning Llama 2,3:

| Steps | Description | Resources |
|-------|-------------|-----------|
| 1)    | Gather questions and answers in a text file | [🔗 Dataset](https://github.com/Apil12/NLP_GENAI/blob/master/LLAMA2_FINETUNED_MODEL/train.txt) |
| 2)    | Share the prepared dataset on Hugging Face's repository | [🔗 Hugging Face Repository](https://huggingface.co/datasets/Jevvan123/lmmma_2dataset) |
| 3)    | Execute the provided Jupyter code to fine-tune Llama 2 | [🔗 Jupyter Notebook](https://github.com/Apil12/NLP_GENAI/blob/master/LLAMA2_FINETUNED_MODEL/fine_tune_models.ipynb) |
| 4)    | Evaluate the performance of the fine-tuned model | [🔗 Evaluation Notebook](https://github.com/Apil12/NLP_GENAI/blob/master/LLAMA2_FINETUNED_MODEL/Testing_LLMA2.ipynb) |

---

### b) Steps for Fine-Tuning Gemma:

| Steps | Description | Resources |
|-------|-------------|-----------|
| 1)    | Organize questions and answers in a text file | [🔗 Dataset](https://github.com/Apil12/NLP_GENAI/blob/master/gemma%20model/test.txt) |
| 2)    | Share the formatted dataset on Hugging Face's repository | [🔗 Hugging Face Repository](https://huggingface.co/datasets/Jevvan123/Gemma_huba_brandset) |
| 3)    | Run the provided Jupyter code to fine-tune Gemma | [🔗 Jupyter Notebook](https://github.com/Apil12/NLP_GENAI/blob/master/gemma%20model/Fine_tuned_Model_gemmamodel.ipynb) |
| 4)    | Assess the performance of the fine-tuned model | [🔗 Evaluation Notebook](https://github.com/Apil12/NLP_GENAI/blob/master/gemma%20model/Testing_gemma_model.ipynb) |

---

### c) Steps for Fine-Tuning Mistral (7 Billion Parameters Model) on Colab's Free GPU with Inference:

| Steps | Description | Resources |
|-------|-------------|-----------|
| 1)    | Execute the provided Jupyter code to fine-tune Mistral and upload adapter files to Hugging Face's models | [🔗 Jupyter Notebook](https://github.com/Apil12/NLP_GENAI/blob/master/Mixtral_model/Mixtral_finetuned_model.ipynb) |

### D) CUDA and PyTorch Setup Guide

This guide provides detailed instructions on how to set up CUDA and PyTorch for efficient machine learning model training and inference. You can download the full guide as a PDF using the link below.

| Steps | Description | Resources |
|-------|-------------|-----------|
| 1)    | Download the detailed guide for setting up CUDA and PyTorch. | [🔗 CUDA and PyTorch Setup Guide (PDF)](https://github.com/Apiljungthapa/NLP_GENAI/blob/master/cuda%20and%20pytourch%20setup%20for%20llm.pdf) |

## Summary of Setup Process

1. **Install CUDA**: Install the necessary CUDA Toolkit and drivers for your NVIDIA GPU.
2. **Install PyTorch with CUDA Support**: Follow the PyTorch installation steps to ensure it can use your GPU.
3. **Verify Installation**: Test your setup to make sure CUDA is properly detected and working with PyTorch.

For detailed instructions, refer to the PDF guide linked in the table above.


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
