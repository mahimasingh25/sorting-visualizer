function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#F6D1D9");//Color update to red

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#F7F0A8");//Color update to yellow

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#8ED5EC");//Color update to blue
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#F6D1D9");//Color update to red
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#8ED5EC");//Color update to blue
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#F6D1D9");//Height update
            div_update(divs[i],div_sizes[i],"#F6D1D9");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#8ED5EC");//Color update to blue
        }
        div_update(divs[i],div_sizes[i],"#B7F1A5");//Color update to green
    }
    div_update(divs[i],div_sizes[i],"#B7F1A5");//Color update to green

    enable_buttons();
}