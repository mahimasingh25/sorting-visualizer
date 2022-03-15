function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;
    div_update(divs[start],div_sizes[start],"#F7F0A8");//Color update to yellow

        for(var j =start + 1; j <= end ; j++ )
        {
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"#F7F0A8");//Color update to yellow

                div_update(divs[i],div_sizes[i],"#F6D1D9");//Color update to red
                div_update(divs[j],div_sizes[j],"#F6D1D9");//Color update to red

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"#F6D1D9");//Height update
                div_update(divs[j],div_sizes[j],"#F6D1D9");//Height update

                div_update(divs[i],div_sizes[i],"#8ED5EC");//Height update
                div_update(divs[j],div_sizes[j],"#8ED5EC");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"#F6D1D9");//Color update to red
    div_update(divs[i-1],div_sizes[i-1],"#F6D1D9");//Color update to red
    
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"#F6D1D9");//Height update
    div_update(divs[i-1],div_sizes[i-1],"#F6D1D9");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"#B7F1A5");//Color update to green
    }

    return i-1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);
        quick_sort (piv_pos +1, end) ;
    }
 }