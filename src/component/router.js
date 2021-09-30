<BrowserRouter>
{/* second switch */}
<Switch>
  {/* tarpor route  */}
<Route path ="/Home">
<Home></Home>
</Route>



<Route path ="/About">
  <About></About>


</Route>

<Route exact path ="/">
<Friends></Friends>
</Route>


{/* if not found */}


<Route>
  <Notfound></Notfound>
</Route>



{/* defult */}


</Switch>
</BrowserRouter>