
Template.pageHome.onCreated(function () {
    this.data.news = new ReactiveVar([]);
    this.data.language = new ReactiveVar('tr');
});

Template.pageHome.helpers({
    languages: function () {
        return [
            { text: 'Türkçe', value: 'tr' },
            { text: 'Almanya', value: 'de' },
            { text: 'İngiltere', value: 'en' },
            { text: 'Rusya', value: 'ru' },
        ]
    }
});

Template.pageHome.onRendered(function () {
    const self = this;

    this.autorun(function () {

        const language = self.data.language.get();

        const obj = {
            queryParams: []
        }

        obj.queryParams.push({ key: 'country', value: language })
        obj.queryParams.push({ key: 'tag', value: 'general' })

        Loading.show();
        ZigoApi.news.getNews(obj, function (error, result) {
            Loading.hide();

            console.log(result);

            self.data.news.set(result.result);
        })
    });
});

Template.pageHome.events({
    'click .brd-select-language': function (event, template) {
        event.preventDefault();
        template.data.language.set(this.value);
    }
});