from django.contrib import admin

from .models import Category, Answer

# ---------------- Register Category to admin panel
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
  list_display = ('title', 'parent')
  search_fields = ['title'] 

  def get_search_results(self, request, queryset, search_term):
    queryset, use_distinct = super().get_search_results(request, queryset, search_term)
    queryset = queryset.filter(language=request.LANGUAGE_CODE)

    return queryset, use_distinct

# ---------------- Register Answer to admin panel
@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
  list_display = ('title', 'category')
  search_fields = ['title']  
