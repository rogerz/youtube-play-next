var Ypn = {
    next: {},
    prev: {},
    title: '',
    run: function() {
        this.title = $('#eow-title').text().trim();
        this.scan_items();
        this.mark_items();
    },
    scan_items: function() {
        var self = this;
        $('#watch-related').find('a').filter('.video-list-item-link').each(function(idx) {
            var title = $(this).find('[title]').attr('title');
            var link = $(this).attr('href');
            switch (self.check_item(title, link)){
                case 'prev':
                    self.prev = {title: title, a: $(this)};
                    break;
                case 'next':
                    self.next = {title: title, a: $(this)};
                    break;
            }
        });
    },
    check_item: function(title, link) {
        if (title < this.title && (!this.prev.title || title > this.prev.title)) {
            return 'prev';
        } else if (title > this.title && (!this.next.title || title < this.next.title)) {
            return 'next';
        } else {
            return 'skip';
        }
    },
    mark_items: function() {
        this.prev && this.prev.a.find('span').filter(':last').before('<span class="stat alt">Prev</span>')
            && $('#watch-related').prepend($('li').has(this.prev.a));
        this.next && this.next.a.find('span').filter(':last').before('<span class="stat alt">Next</span>')
            && $('#watch-related').prepend($('li').has(this.next.a));
    }
};
Ypn.run();
