module Dwork
  module SampleFilter
    def asset_url(input)
      "http://www.example.com/#{input}?#{Time.now.to_i}"
    end
  end

  class SampleTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @key = text
    end

    def render(context)
      label_classes = %w(default primary success info warning danger)
      label_name = context[@key]
      <<-html
      <label class="label label-#{label_classes[label_name.to_i(36)%label_classes.length]}">#{label_name}</label>
      html
    end
  end
end
# Liquid::Template.register_filter(Dwork::SampleFilter)
Liquid::Template.register_tag('job_tag', Dwork::SampleTag)