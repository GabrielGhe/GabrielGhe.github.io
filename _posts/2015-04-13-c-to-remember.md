---
layout: post
title: "C To Remember"
description: "C is used almost everywhere, enough said. This is a short overview of the language. To run a C file, you frist compile the file into an object file and then the linker links it to any other compiled file that it needs and creates an executable."
category: c
tags: [memory, struct, operator, pointer, array]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

C is used almost everywhere, enough said. This is a short overview of the language. To run a C file, you frist compile the file into an object file and then the linker links it to any other compiled file that it needs and creates an executable.

<!-- Content -->
<h3>Content</h3>

<!-- -->
<h4></h4>


<!-- Hello World -->
<h4>Hello World</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
#include <stdio.h>

void hello()
{
    printf("hello world\n");
}

int main()
{
    hello();
    return 0;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Variables -->
<h4>Variables</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
// only accessible to functions of the same file
static int s_i = 3;

// normal primitives
char myChar = 'a';
int i = 4;
float f = 2.3;

// missing types
typedef char bool;
#define true 1
#define false 0

// arrays
int values[5];
int values[] = { 1, 2, 3, 4, 5 };   // [1, 2, 3, 4, 5]
int values[5] = { 1, 2, 3 };        // [1, 2, 3, 0, 0]
values[0] = 6                       // [6, 2, 3, 4, 5]
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Operators -->
<h4>Operators</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
/* Precedence of Operators

Operator        Operation           Associativity
!~ ++ -- -      Unary                       <
* / %           Multiplicative          >
+ -             Additive                >
<< >>           Bitwise shift           >
< > <= >=       Relational              >
== !=           Equality                >
&               Bitwise AND             >
^               Bitwise XOR             >
|               Bitwise OR              >
&&              Logical AND             >
||              Logical OR              >
= *= /= %=      Assignment                  <
+= -= <<= >>=
^= |=       

*/
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Pointers -->
<h4>Pointers</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
/* INIT POINTER
p is a pointer to int and is initialized with address of apples
*/
int apples = 5;
int* p = &apples;       // p = apples' address

/* DEREFERENCE POINTER
- dereference p (get the value of the address that p is pointing at)
- add 6 to dereferenced p
- place result in oranges
*/
int oranges = *p + 6;   // oranges = 11

/* POINTER VALIDATION
you initialize the poitner to 0
which is null/nullptr and before you use
the pointer, check if it's valid with an if
*/
int* g = 0;
if (g)
{
    // g is not null, do stuff with g
}

/* ARRAYS AND POINTERS
*/
int values[] = { 0, 1, 2, 3, 4 };
int* ptr = values;          // pointing to first element (0)
int* last = &values[4];     // pointing to last (4)

++ptr;                      // pointing to second element (1)
ptr += 3;                   // pointing to last element (4)


/* FUNCTION POINTERS
*/
int celsius_to_f(int c)
{
    return c * 9/5 + 32;
}
typedef int (* converter)(int from);
converter convert = celsius_to_f;
printf("%d\n", convert(34));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Structures -->
<h4>Structures</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
typedef struct
{
    float red;
    float green;
    float blue;
    float alpha;
} color;
color my_color = { 1, 0, 0, 1 }; // red
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- Memory -->
<h4>Memory</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
#include <stdlib.h>

/* malloc
allocates number of bytes,
returning pointer to address of first byte
*/
typedef struct {
    int value;
} MyStruct;

MyStruct* a = (MyStruct*) malloc(sizeof(MyStruct));
MyStruct* b = (MyStruct*) malloc(sizeof(MyStruct));
MyStruct* c = (MyStruct*) malloc(sizeof(MyStruct));

a->value = 1;
b->value = 2;
c->value = 3;

/* free
releases the memory given a pointer
*/
free(a);
free(b);
free(c);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


<!-- BONUS -->
<h4>BONUS: quicksort</h4>

<!-- Code _______________________________________-->
{% highlight c linenos %}
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// swap
void swap(int* i, int* j)
{
	int temp = *i;
	*i = *j;
	*j = temp;
}

// partition
int partition(int* array, int first, int end)
{
	int pivot = first + rand() % (end-first);
	swap(array+pivot, array+end);

	for(int i=first; i < end; ++i)
	{
		if( *(array+i) <= *(array+end))
		{
			swap(array+i, array+first);
			++first;
		}
	}

	swap(array+first, array+end);
	return first;
}

// quick_sort_helper
void quick_sort_helper(int* array, int first, int end)
{
	if (first < end)
	{
		int pivot = partition(array, first, end);
		quick_sort_helper(array, first, pivot-1);
		quick_sort_helper(array, pivot+1, end);
	}
}

void quick_sort(int* array, int size)
{
	quick_sort_helper(array, 0, size - 1);
}

// print array
void print_array(int* array, int size)
{
	printf("[ ");
	for(int i=0; i < size; ++i)
	{
		printf("%d ", *(array + i));
	}
	printf("]\n");
}


int main()
{
	srand(time(0));
	int size = 5;
	int* my_array = (int*) malloc(size * sizeof(int));
	for(int i=0; i < size; ++i)
	{
		*(my_array+i) = rand() % 100;
	}
	print_array(my_array, size);
	quick_sort(my_array, size);
	print_array(my_array, size);
	free(my_array);
	return 0;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
