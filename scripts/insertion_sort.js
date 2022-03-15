function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#F7F0A8");//Color update to yellow

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#F6D1D9");//Color update to red
            div_update(divs[i+1],div_sizes[i+1],"#F6D1D9");//Color update to red

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#F6D1D9");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#F6D1D9");//Height update
    
            div_update(divs[i],div_sizes[i],"#8ED5EC");//Color update to blue
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#F7F0A8");//Color update to yellow
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#8ED5EC");//Color update to blue
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#B7F1A5");//Color update to green
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#B7F1A5");//Color update to green

    enable_buttons();
}