from django.shortcuts import render

DEFAULT_TITLE = "Satbayev University - Petroleum Engineering"

def index(request):
  context = {
    "category": {},
    "DEFAULT_TITLE": DEFAULT_TITLE
  }
  return render(request, "app/category/page.html", context)
