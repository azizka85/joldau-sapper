from django.core.management.base import BaseCommand
from ...models import Answer, Category

class Command(BaseCommand):
  help = "Add fake models"

  def handle(self, *args, **options):
# ---------------------- Add fake categories --------------------------
    # ------------ Clear data -------------------
    Category.objects.all().delete()

    # -------------- Fill data -----------------
    Category(
      id=1,
      path="transfer",
      name="transfer",
      title="Перевод из другого ВУЗа",
      description="Здесь приводятся ответы на вопросы, касательно перевода из другого ВУЗа",
      language="ru",
      parent=None
    ).save()

    Category(
      id=2,
      path="expulsion",
      name="expulsion",
      title="Отчисление из ВУЗа",
      description="Здесь приводятся ответы на вопросы, касательно отчисления из ВУЗа",
      language="ru",
      parent=None
    ).save()    

    Category(
      id=3,
      path="academic-leave",
      name="academic-leave",
      title="Академический отпуск",
      description="Здесь приводятся ответы на вопросы, касательно получения академического отпуска либо выхода из него",
      language="ru",
      parent=None
    ).save()    

    Category(
      id=4,
      path="academic-mobility",
      name="academic-mobility",
      title="Академическая мобильность",
      description="Здесь приводятся ответы на вопросы, касательно оформления документов на академическую мобильность",
      language="ru",
      parent=None
    ).save()    

    Category(
      id=5,
      path="transfer",
      name="transfer",
      title="Басқа ЖОО-ға өту",
      description="Басқа ЖОО-ға өту туралы сұрақтарға жауаптар берілген осы жерде",
      language="kk-kz",
      parent=None
    ).save()    

    Category(
      id=6,
      path="expulsion",
      name="expulsion",
      title="ЖОО-дан шығып кету",
      description="ЖОО-дан шығып кету туралы сұрақтарға жауаптар берілген осы жерде",
      language="kk-kz",
      parent=None
    ).save()    

    Category(
      id=7,
      path="academic-leave",
      name="academic-leave",
      title="Академиялық демалыс",
      description="Академиялық демалыс туралы сұрақтарға жауаптар берілген осы жерде",
      language="kk-kz",
      parent=None
    ).save()    

    Category(
      id=8,
      path="transfer",
      name="transfer",
      title="Transfer from other university",
      description="Here, you can find answers about transfer from other universities to Satbayev University",
      language="en",
      parent=None
    ).save() 

#-------------------------- Add fake answers -------------------------
    # -------------- Clear data -------------------
    Answer.objects.all().delete()

    # ------------- Fill data --------------------
    Answer(
      id=1,
      name="technical",
      title="Перевод из Технического Университета в Satbayev University",
      content='<p>При переводе из других Технических Университетов в Satbayev University, необходимо сдать разницу.</p>\
				<p>Список предметов указаны в файле: </p>\
				<p><a href="#">Список предметов</a></p>',
      category=Category(pk=1)
    ).save()  

    Answer(
      id=2,
      name="transfer",
      title="Отчисление из Satbayev University для перевода в другой ВУЗ",
      content='<p>Необходимо заполнить обходной лист.</p>\
				<p>Обходной лист указан в файле: </p>\
				<p><a href="#">Обходной лист</a></p><p>Необходимо заполнить обходной лист.</p>\
				<p>Обходной лист указан в файле: </p>\
				<p><a href="#">Обходной лист</a></p>',
      category=Category(pk=2)
    ).save()

    Answer(
      id=3,
      name="compete",
      title="Уход в академический отпуск из-за участия в соревнованиях",
      content='<p>Необходимо написать заявление на имя проректора по учебной работе.</p>\
				<p>Шаблон заявления указан в файле: </p>\
				<p><a href="#">Шаблон заявления</a></p>',
      category=Category(pk=3)
    ).save()

    Answer(
      id=4,
      name="foreign",
      title="Академическая мобильность в зарубежные ВУЗы",
      content='<p>Необходимо написать заявление на имя проректора по учебной работе.</p>\
				<p>Шаблон заявления указан в файле: </p>\
				<p><a href="#">Шаблон заявления</a></p>',
      category=Category(pk=4)
    ).save()

    Answer(
      id=5,
      name="technical",
      title="Техникалық Университеттен Satbayev University-ге ауысу",
      content='<p>Оқу проректорге хат жазу керек.</p>\
				<p>Хаттын шаблоны мына жерден алса болады: </p>\
				<p><a href="#">Хаттын шаблоны</a></p>',
      category=Category(pk=5)
    ).save()

    Answer(
      id=6,
      name="technical",
      title="Transfer from other technical university to Satbayev University",
      content='<p>Need to write request to vice rector of Satbayev University.</p>\
				<p>Template of this request you can find here: </p>\
				<p><a href="#">Template</a></p>',
      category=Category(pk=6)
    ).save()
    