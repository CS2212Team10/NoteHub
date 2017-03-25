<!-----------------------------------------------------------------------------
    @author Paul Li
    @date Feb, 27, 2017
    @version 2.0 (Stage 2)

    Base Layout (for logged in user?)
    ====================================
    Acts as a template for multiple webpages across our webapp for easy to change
    and universal design across all our pages. Includes:
        - All the important information in the header (stylesheet, title, etc)
        - Navbar
        - Footer
        - JS
 ------------------------------------------------------------------------------->

<!doctype html>
<html lang="en" class="no-js">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title><g:layoutTitle default="NoteHub"/></title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""> <!-- TODO: Description -->

        <!-- Custom Styling --> <!-- TODO: what does this do? -->
        <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;  }
        </style>

        <!-- Load the stylesheets -->
        <asset:stylesheet src="application.css"/>

        <!-- Website Icon -->
        <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

        <script type="text/javascript"> <!-- TODO: what does this do? -->
            window.contextPath = "${request.contextPath}";
        </script>
    </head>


<body ng-app="notehub">
    <!--<img src=".../assets/images/skin/linedPaper.jpg">-->

    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please
        <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->


    <span style="height: 12px;display:inline-block;width:100%;margin-bottom: 10px;"></span>

    <!-- content body -->
    <g:layoutBody/>
    <span style="height: 12px;display:inline-block;width:100%;margin-bottom: 10px;"></span>

    <!----------------
    -    Loading     -
    ------------------>

    <!-- Loading JS -->
    <div id="spinner" class="spinner" style="display:none;">
        <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <!-- Load angular app -->
    <asset:javascript src="/notehub/notehub.js" />
</body>
</html>