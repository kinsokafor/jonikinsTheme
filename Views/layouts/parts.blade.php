<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title></title>
    <link href="/color-scheme.css" rel="stylesheet" />
    <!-- Custom styles for this template-->
    <link href="@yield('assets')style.css" rel="stylesheet">
    {!! Assoto\Stack::display('head') !!}
</head>

<body>
    <script>0</script>
        <!-- Nav Items -->
        @foreach($mainMenu as $menu)
        @if(\EvoPhp\Api\Operations::checkAccess($menu['access']))
            <!-- {{$menu['iconClass']}} -->
            <!-- {{$loop->index}} -->
            <!-- @isset($menu['submenu']) collapsed @endisset -->
            <!-- {{$menu['link']}} -->
            <!-- {{$menu['label']}} -->
            @isset($menu['submenu'])
                @foreach($menu['submenu'] as $submenu)
                @if(isset($submenu['access']) && \EvoPhp\Api\Operations::checkAccess($submenu['access']))
                    <!-- {{$submenu['link']}} -->
                    <!-- {{$submenu['label']}} -->
                @endif
                @endforeach
            @endisset
        @endif
        @endforeach

        @section('content')
            @yield('content') 
        @show

        <!-- <span>Copyright &copy; {{$site_name}} {{date('Y')}}</span> -->

    {!! Assoto\Stack::display('footer') !!}
</body>

</html>