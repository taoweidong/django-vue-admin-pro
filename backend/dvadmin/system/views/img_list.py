# -*- coding: utf-8 -*-

"""
@author: 猿小天
@contact: QQ:1638245306
@Created on: 2021/8/9 009 20:48
@Remark:
"""
from rest_framework import serializers

from dvadmin.system.models import ImgList
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class ImgSerializer(CustomModelSerializer):
    img = serializers.SerializerMethodField(read_only=True)

    def get_img(self, instance):
        return str(instance.url)

    class Meta:
        model = ImgList
        fields = "__all__"

    def create(self, validated_data):
        validated_data['name'] = str(validated_data.get('url'))
        return super().create(validated_data)


class ImgViewSet(CustomModelViewSet):
    """
    图片管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = ImgList.objects.all()
    serializer_class = ImgSerializer
    filter_fields = ['name', ]
