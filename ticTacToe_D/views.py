from django.shortcuts import render

def game(request):
    data={
        'll':[1,2,3,4,5,6,7,8,9]
    }
    return render(request,'index.html',data)