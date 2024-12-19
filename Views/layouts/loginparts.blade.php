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
    @section('content')
        @yield('content') 
    @show
    {!! Assoto\Stack::display('footer') !!}
</body>

</html>