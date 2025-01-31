"""
WSGI config for django2 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from dj_static import Cling, MediaCling

#Cling vai apresentar os arquivos estáticos como css, imagens, js...
#MediaCling vai apresentar os arquivos de upload do usuário.

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django2.settings')

application = Cling(MediaCling(get_wsgi_application()))


