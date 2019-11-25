import scrapy
from Film.items import FilmItem


class FilmCrawler(scrapy.Spider):
    name = 'film'
    start_urls = ['http://www.phimmoi.net/phim-le/', 'http://www.phimmoi.net/phim-bo/']

    def parse(self, response):
        film_list = response.xpath('//ul[@class="list-movie"]/li')
        for film in film_list:
            href = film.xpath('.//a/@href').get()
            yield response.follow(href, callback=self.parse_film)

        next_page = response.xpath('//ul[@class="pagination pagination-lg"]//a/@href').getall()[-1]
        print(next_page)
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)

    def parse_film(self, response):
        items = FilmItem()
        # items['img'] = response.xpath(
        #     '//div[@class="movie-l-img"]//img[@class="title-1"]/@src').get()
        items['name'] = response.css(
            '.title-1::text').get()
        items['realname'] = response.css(
            '.title-2::text').get()
        items['status'] = response.css(
            '.status::text').get()
        items['director'] = response.css(
            '.director::text').getall()
        items['country'] = response.css(
            '.country::text').getall()
        items['year'] = response.css(
            '.movie-dd:nth-child(16) a::text').get()
        items['dateIssue'] = response.css(
            '.movie-dd:nth-child(19)::text').get()
        items['time'] = response.css(
            '.movie-dd:nth-child(22)::text').get()
        items['quanlity'] = response.css(
            '.movie-dd:nth-child(25)::text').get()
        items['resolution'] = response.css(
            '.movie-dd:nth-child(28)::text').get()
        items['language'] = response.css(
            '.movie-dd:nth-child(31)::text').getall()
        items['tag'] = response.css(
            '.category::text').getall()
        items['content'] = response.css(
            '#film-content p::text').get()
        items['url'] = response.css(
            '.title-1::attr(href)').get()
        items['company'] = response.css(
            '.movie-dd:nth-child(37)::text').getall()
        items['IMDb'] = response.css(
            '.imdb::text').get()
        items['keywords'] = response.css(
            '.tag-link::text').getall()
        yield items
