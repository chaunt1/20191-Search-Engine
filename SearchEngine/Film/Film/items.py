# -*- coding: utf-8 -*-
# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class FilmItem(scrapy.Item):
    # define the fields for your item here like:
    # title = scrapy.Field()
    # img = scrapy.Field()
    name = scrapy.Field()
    realname = scrapy.Field()
    status = scrapy.Field()
    director = scrapy.Field()
    country = scrapy.Field()
    year = scrapy.Field()
    time = scrapy.Field()
    dateIssue = scrapy.Field()
    quanlity = scrapy.Field()
    resolution = scrapy.Field()
    language = scrapy.Field()
    tag = scrapy.Field()
    url = scrapy.Field()
    content = scrapy.Field()
    company = scrapy.Field()
    IMDb = scrapy.Field()
    keywords = scrapy.Field()
    pass
