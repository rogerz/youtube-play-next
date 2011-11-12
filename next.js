var Ypn = {
    next: {},
    prev: {},
    title: '',
    init: function() {
        this.title = '';
    },
    run: function() {
        this.init();
        this.title = $('#eow-title').text().trim();
        this.read_items();
        this.add_links();
    },
    read_items: function() {
        var self = this;
        $('#watch-related').find('a').filter('.video-list-item-link ').each(function(idx) {
            var title = $(this).find('[title]').attr('title');
            var link = $(this).attr('href');
            self.add_item(title, link);
        });
    },
    add_item: function(title, link) {
        if (title < this.title && (!this.prev.title || title > this.prev.title)) {
            this.prev = {title: title, link: link};
            console.log('prev: '+title);
        } else if (title > this.title && (!this.next.title || title < this.next.title)) {
            this.next = {title: title, link: link};
            console.log('next: '+title);
        } else {
            console.log('skip: '+title);
        }
    },
    add_links: function() {
        if (this.next) {
            $('#watch-headline-title').append('<a href="'+this.next.link+'" id="next-related-video">'+this.next.title+'</a>');
        }
        if (this.prev) {
            $('#watch-headline-title').prepend('<a href="'+this.prev.link+'"id="prev-related-video">'+this.prev.title+'</a>');
        }
    }
};
Ypn.run();
