# WP React Theme

This theme is demo for [WordCamp Kathmandu 2019](https://2019.kathmandu.wordcamp.org), which implements React in archive page to add infinite scroll.

>  **Not for production use.**
> This is a child theme for default WP `twentynineteen` theme.

# Contributors

 - [Rakesh Lawaju](https://github.com/codearryaas/) (WP Theme part)
 - [Rabin Gaire](https://github.com/rabingaire/) (React Part)

## Requirement

 - Latest WordPress setup with `twentynineteen` theme installed.
 - Add some dummy post in backend or import [Theme test file](https://raw.githubusercontent.com/WPTRT/theme-unit-test/master/themeunittestdata.wordpress.xml) as [instructed here](https://codex.wordpress.org/Theme_Unit_Test).
 - `Node` installed.

## Recommended
- Install [postman](https://www.getpostman.com/) to check API data.

## Getting Started


**A) WordPress Part**
- Go to `wp-content/themes/` folder.
- Create new folder called `twentynineteen-child`.
- Copy `index.php` file from `twentynineteen` theme and paste it to `twentynineteen-child` folder.
- Inside `twentynineteen-child` folder create two files
	- style.css
	- functions.php
- On `style.css` we will define theme info and add little css as [shown here](https://github.com/codearryaas/wp-react-theme/blob/master/style.css).
- On `index.php` remove all the code inside `<main id="main" class="site-main"></main>`
- On `functions.php` lets enqueue style and scripts as [shown here](https://gist.github.com/codearryaas/c171ce2f4a334e99f3b498947b98efd4).

> Note that we have not created js files yet so it will give error on console.
- Go to backend and activate `twentynineteen-child` theme. On front end there should be blank.
- Go to `http://yoursite.local/wp-json/wp/v2/posts` it should show json with posts of your site.
- Next step is to add more code in `functions.php` as [shown here](https://gist.github.com/codearryaas/cf5b7d7a039953770651275481a5bcfc). This would add some more data in API.

**B) React Part**
- (instructions here)
