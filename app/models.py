from django.db import models
from django.utils.translation import gettext_lazy as _

# --------------------------- Category schema -----------------------------
class Category(models.Model):
	class Meta:
		verbose_name = _('Category')
		verbose_name_plural = _('Categories') 

	parent = models.ForeignKey(
    'self',
    blank=True,
    null=True,
    verbose_name=_('Parent'),
    related_name='children',
    on_delete=models.CASCADE
  )    

	path = models.TextField(
    null=True,
    blank=True,
    verbose_name=_('Path'),
    help_text=_('Path of this Category')
  )

	name = models.CharField(
		max_length=64, 
    null=True,
    blank=True,
		verbose_name=_('Name'),
		help_text=_('Name of parameter in the pattern of url')
	)

	title = models.TextField(
		verbose_name=_('Title'),
		help_text=_('Title of the category')
	)

	description = models.TextField(
		null=True, 
		blank=True, 
		verbose_name=_('Description'),
		help_text=_('Description of the category')
	)

	language = models.CharField(
		max_length=10, 
		verbose_name=_('Language'),
		help_text=_('Language code'), 
		default='ru'
	)

	created_at = models.DateTimeField(
    auto_now_add=True, 
    editable=False
  )
  
	updated_at = models.DateTimeField(
    auto_now=True, 
    editable=False
  )       

	def __str__(self):
		title = self.title
		cat = self.parent
		
		while cat != None:
			title = cat.title + ' - ' + title
			cat = cat.parent

		return title	

# ------------------------ Answer schema ----------------------------------------------------
class Answer(models.Model):
	class Meta:
		verbose_name = _('Answer')
		verbose_name_plural = _('Answers') 

	category = models.ForeignKey(
    Category, 
    verbose_name=_('Category'),
    related_name='answers',
    on_delete=models.CASCADE
  )

	name = models.CharField(
		max_length=64, 
		null=True, 
		blank=True,     
		verbose_name=_('Name'),
		help_text=_('Name of parameter in the pattern of url')
	)

	title = models.TextField(
		verbose_name=_('Title'),
		help_text=_('Title of the answer')
	)

	content = models.TextField(
		null=True, 
		blank=True, 
		verbose_name=_('Content'),
		help_text=_('Content of the answer')
	)  

	created_at = models.DateTimeField(
    auto_now_add=True, 
    editable=False
  )
  
	updated_at = models.DateTimeField(
    auto_now=True, 
    editable=False
  )   

	def __str__(self):
		return self.title
