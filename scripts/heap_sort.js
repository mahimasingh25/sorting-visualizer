function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"#F6D1D9"); //red
    div_update(divs[j],div_sizes[j],"#F6D1D9"); //red

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"#F6D1D9"); //red
    div_update(divs[j],div_sizes[j],"#F6D1D9"); //red

    div_update(divs[i],div_sizes[i],"#8ED5EC"); //blue
    div_update(divs[j],div_sizes[j],"#8ED5EC"); //blue
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"#8ED5EC"); //blue
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"#F6D1D9"); //red
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"#8ED5EC"); //blue
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"#F6D1D9"); //red
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"#B7F1A5"); //green
        div_update(divs[i],div_sizes[i],"#F7F0A8"); //yellow

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"#8ED5EC"); //blue
        div_update(divs[i],div_sizes[i],"#B7F1A5"); //green
    }
    div_update(divs[i],div_sizes[i],"#B7F1A5"); //green
}