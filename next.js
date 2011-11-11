var Ypn = {
	titles: {},
	init: function() {
        this.current_title = '';
	},
	run: function() {
		this.init();
        this.current_title = $(#watch-head-line-title).val();
        this.read_items();
	},
    read_items: function() {
        var self = this;
        $('li.video-list-item-link').each(function(idx)) {
            var title = $(this).attr('title').val();
            var link = $(this).attr('href').val();
            self.add_item(title, link);
        }
    },
    add_item: function(title, link) {
        this.titles.push({title: title, link: link});
    },
}
Ypn.run();
