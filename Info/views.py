from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import *
from .serializers import *
from django.http.response import JsonResponse


@csrf_exempt
def PersonalInfoApi(request, id=0):
    if request.method == 'GET':
        info = PersonalInfo.objects.all()
        info_serializers = PersonalInfoSerializer(info, many=True)
        return JsonResponse(info_serializers.data, safe=False)
    elif request.method == 'POST':
        info_data = JSONParser().parse(request)
        info_serializers = PersonalInfoSerializer(data=info_data, many=True)
        if info_serializers.is_valid():
            info_serializers.save()
            return JsonResponse("Added successfully!", safe=False)
        return JsonResponse("Failed to add.", safe=False)
    elif request.method == 'PUT':
        info_data = JSONParser().parse(request)
        info = PersonalInfo.objects.get(Id=info_data['Id'])
        info_serializers = PersonalInfoSerializer(info, data=info_data)
        if info_serializers.is_valid():
            info_serializers.save()
            return JsonResponse("Added successfully!", safe=False)
        return JsonResponse("Failed to add.", safe=False)
    elif request.method == 'DELETE':
        info = PersonalInfo.objects.get(Id=id)
        info.delete()
        return JsonResponse("Deleted Successfully")
