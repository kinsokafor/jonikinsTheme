<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1,
            shrink-to-fit=no">
        <meta name="description" content="Homely - Real Estate HTML5 Template">

        <title>Homely - Real Estate HTML5 Template</title>

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="@yield('assets')media/favicon-dark.png">

        <!-- All CSS files -->
        <link rel="stylesheet" href="@yield('assets')css/vendor/bootstrap.min.css">
        <link rel="stylesheet" href="@yield('assets')css/vendor/font-awesome.css">
        <link rel="stylesheet" href="@yield('assets')css/vendor/slick.css">
        <link rel="stylesheet" href="@yield('assets')css/vendor/slick-theme.css">
        <link rel="stylesheet" href="@yield('assets')css/vendor/sal.css">
        <link rel="stylesheet" href="@yield('assets')css/vendor/ionrangeslider.css">
        <link href="/color-scheme.css" rel="stylesheet" />
        <link rel="stylesheet" href="@yield('assets')css/app.css">

        <script async="" src="../../../gtag/js?id=UA-266165434-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'UA-266165434-1');
        </script>
        {!! Assoto\Stack::display('head') !!}
 
    </head>

    <body class="ui-smooth-scroll">
        <!-- Preloader -->
        <section>
            <div id="preloader">
                <div id="ctn-preloader" class="ctn-preloader">
                    <div class="animation-preloader">
                        <div class="spinner"></div>
                        <div class="txt-loading">
                            <span data-text-preloader="J" class="letters-loading">
                                J
                            </span>
                            
                            <span data-text-preloader="O" class="letters-loading">
                                O
                            </span>
                            
                            <span data-text-preloader="N" class="letters-loading">
                                N
                            </span>
                            
                            <span data-text-preloader="I" class="letters-loading">
                                I
                            </span>
                            
                            <span data-text-preloader="K" class="letters-loading">
                                K
                            </span>
                            
                            <span data-text-preloader="I" class="letters-loading">
                                I
                            </span>

                            <span data-text-preloader="N" class="letters-loading">
                                N
                            </span>
                            
                            <span data-text-preloader="S" class="letters-loading">
                                S
                            </span>
                        </div>
                    </div>	
                    <div class="loader-section section-left"></div>
                    <div class="loader-section section-right"></div>
                </div>
            </div>
        </section>
        
        <!-- Back To Top Start -->
        <a href="#main-wrapper" id="backto-top" class="back-to-top">
            <i class="fas fa-angle-up"></i>
        </a>
        <!-- Main Wrapper Start -->
        <div id="main-wrapper" class="main-wrapper overflow-hidden">
            <div id="scroll-container">
                <!-- Header Area Start -->
                <header class="header st-1">
                    <div class="container">
                        <nav class="navbar navbar-expand-xl align-items-xl-center align-items-start p-0">
                            
                            <div class="col-xl-3 ">
                                <a class="navbar-brand" href="index.html"><img alt="" src="@yield('assets')media/logo.png"></a>
                            </div>
                            <div class="col-xl-6 text-end">
                                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <i class="fas fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse justify-content-center text-start" id="mynavbar">
                                    <ul class="navbar-nav mainmenu m-0">
                                        <li class="menu-item-has-children">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="about.html">About</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="properties.html">Properties</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="properties-detail.html">Property Details</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="contact.html" class="active">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 d-xl-block d-none">
                                <a href="tel:123" class="phone-link"><i class="fal fa-phone-alt"></i> +1 234 567 890</a>
                            </div>
                            
                        </nav>
                    </div>
                </header>
                <!-- Header Area end -->

                <!-- inner banner Area start -->
                <section class="inner-banner">
                    <div class="container">
                        <h2>Contact Us</h2>
                    </div>
                </section>
                <!-- inner banner Area end -->

                <!-- properties detail Area start -->
                <section class="properties-detail bg-white p-100">
                    <div class="container">
                        @section('content')
                            @yield('content') 
                        @show
                    </div>
                </section>
                <!-- properties detail Area end -->

                <!-- footer Area start -->
                <footer class="footer">
                    <div class="container">
                        <div class="main">
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2 text-center  mb-5">
                                    <h2 class="fw-6 fs-40 lh-120 text-uppercase color-white mb-16">Find Your Dream Home Today with Our Extensive Property Collection</h2>
                                    <a href="properties.html" class="real-btn dark mb-lg-0 mb-32">View Properties</a>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-12 mb-5">
                                    <h4 class="title">Location</h4>
                                    <p class="fs-19 lh-130 color-gray mb-12 font-sec">123 Street, Your City, State and Country.</p>
                                    <p class="fs-19 lh-130 color-gray mb-24 font-sec mb-5">123 Street, Your City, State and Country.</p>
                                    <h4 class="title">Timing</h4>
                                    <p class="fw-5 fs-19 lh-130 ls-2 color-gray mb-12 font-sec">Mon-Sat, 9AM - 5PM</p>
                                    <p class="fw-5 fs-19 lh-130 ls-2 color-gray mb-0 font-sec">Sunday Off</p>
                                </div>
                                <div class="col-xl-4 col-lg-4 offset-lg-1 col-sm-8 mb-5 newsletter">
                                    <h2 class="title">Subscribe Our Newsletter</h2>
                                    <form action="./index.html">
                                        <div class="input-group">
                                            <input type="email" class="form-control" id="email" name="email" required="" placeholder="Your Email">
                                            <button type="submit"><i class="fas fa-paper-plane"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-xl-2 col-lg-3 offset-xl-2 offset-lg-1 col-12 mb-5 ">
                                    <h4 class="title">Contact Us</h4>
                                    <a href="" class="fw-6 fs-19 color-gray mb-12 d-block color-hover font-sec">+1 123 456 789</a>
                                    <a href="" class="fw-6 fs-19 color-gray mb-12 d-block color-hover font-sec">+1 123 456 789</a>
                                    <a href="" class="fw-4 fs-19 color-gray mb-24 color-hover text-lowercase font-sec  mb-5">info@homelyexample.com</a>
                                    <h4 class="title">Follow Us</h4>
                                    <ul class="footer-social-icon list-unstyled">
                                        <li> <a href="" class="ms-lg-0"><i class="fab fa-facebook-f"></i></a></li>
                                        <li> <a href=""><i class="fab fa-instagram"></i></a></li>
                                        <li> <a href=""><i class="fab fa-youtube"></i></a></li>
                                        <li> <a href=""><i class="fal fa-basketball-ball"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <p class="fw-4 fs-19 color-gray font-sec m-0 text-center">©2024 Homely, All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- footer Area end -->
            </div>
        </div>
            <!-- Jquery Js -->
            <script src="@yield('assets')js/vendor/jquery-3.6.3.min.js"></script>
            <script src="@yield('assets')js/vendor/bootstrap.min.js"></script>
            <script src="@yield('assets')js/vendor/slick.min.js"></script>
            <script src="@yield('assets')js/vendor/jquery-appear.js"></script>
            <script src="@yield('assets')js/vendor/jquery-validator.js"></script>
            <script src="@yield('assets')js/vendor/smooth-scrollbar.js"></script>
            <!-- Site Scripts -->
            <script src="@yield('assets')js/app.js"></script>
            {!! Assoto\Stack::display('footer') !!}
    </body>

</html>