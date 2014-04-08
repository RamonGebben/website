class WebsiteController < ApplicationController
    def website
        @posts = Post.order( 'created_at DESC' )
    end

end
