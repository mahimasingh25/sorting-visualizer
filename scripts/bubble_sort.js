function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#F7F0A8");//Color update to yellow

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#F6D1D9");//Color update to red
                div_update(divs[j+1],div_sizes[j+1], "#F6D1D9");//Color update to red

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#F6D1D9");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#F6D1D9");//Height update
            }
            div_update(divs[j],div_sizes[j], "#8ED5EC");//Color update to blue
        }
        div_update(divs[j],div_sizes[j], "#B7F1A5");//Color update to green
    }
    div_update(divs[0],div_sizes[0], "#B7F1A5");//Color update to green

    enable_buttons();
}