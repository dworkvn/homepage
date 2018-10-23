# Jekyll overview

## So what is Jekyll, exactly?

Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown (https://daringfireball.net/projects/markdown/)) and our Liquid (https://github.com/Shopify/liquid/wiki) renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages (https://pages.github.com/), which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers **for free**.

## So why Jekyll, exactly?

* Email publish :*
* Web publish

## So what can Jekyll do, exactly?

* Markdown/Slim/Jade/HAML supported
* SCSS/JS concatenation, minification supported https://github.com/jekyll/jekyll-assets
* Static data without database (using yaml file to store info like all countries, all cities) https://jekyllrb.com/docs/datafiles/
* Collection without database (using yaml file to store info like `job postings`) https://jekyllrb.com/docs/collections/ 
* Liquid lang supported (http://liquidmarkup.org (http://liquidmarkup.org/))
    * Variable (https://shopify.github.io/liquid/tags/variable/)
    * Built-in/custom liquid tag/filter https://jekyllrb.com/docs/templates/
    * Layouts, Fragment/Partial inclusion supported 

## Also read

* Dir structure https://jekyllrb.com/docs/structure/
* Front Matter https://jekyllrb.com/docs/frontmatter/

## Basic Usage

```
ruby
docker run -ti --rm -p 4000:4000 -v $(pwd):/srv/jekyll  jekyll/jekyll bash
# now we are inside of bash

jekyll s # To run server, watch for changes to build (Quit and re-run if you changed /_config.yml and /_plugins/*

```