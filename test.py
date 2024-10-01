import torch

# Print the number of available devices
print(f"Number of devices: {torch.cuda.device_count()}")

# Check if CUDA (GPU) is available
if torch.cuda.is_available():
    print("CUDA is available. Using GPU.")
    # Print the name of the first CUDA device
    print(f"Device Name: {torch.cuda.get_device_name(0)}")
else:
    print("CUDA is not available. Using CPU.")

