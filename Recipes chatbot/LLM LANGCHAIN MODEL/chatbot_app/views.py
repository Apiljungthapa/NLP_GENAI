from django.shortcuts import render
from chatbot_app.llm import askMasterChief

def get_recipe(request):
    
    if request.method == 'POST':
        dish_name = request.POST.get('name')
        recipe = askMasterChief(dish_name)
        return render(request, 'home.html', {'recipe': recipe, 'dish_name':dish_name})

    
    return render(request, 'home.html')
