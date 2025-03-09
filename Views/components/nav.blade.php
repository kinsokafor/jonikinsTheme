<button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    <i class="fas fa-bars"></i>
</button>
<div class="collapse navbar-collapse justify-content-center text-start" id="mynavbar">
    <ul class="navbar-nav mainmenu m-0">
        <!--  -->
        @if(\EvoPhp\Api\Operations::isSignedIn()["loginStatus"])
            @if(\EvoPhp\Api\Operations::checkAccess("1,15,14,16,17,18,19"))
                @component('components.nav.admin')
                @endcomponent
            @endif
        @else
            @component('components.nav.home')
            @endcomponent
        @endif
    </ul>
</div>