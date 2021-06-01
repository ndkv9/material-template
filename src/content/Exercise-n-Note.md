---
title: 'About Exercises And Notes'
nav_order: 6
hidden: false
---

<Exercise title={'First Exercise'}>
This is a coding exercise.

  ```cpp

int values = 0;
int sum = 0;

while (true)
{
  Console.WriteLine("Provide a value, a negative value ends the program");
  int value = Convert.ToInt32(Console.ReadLine());
  if (value < 0)
  {
    break;
  }

  values = values + 1;
  sum = sum + value;
}

if (sum == 0)
{
  Console.WriteLine("The average of the values could not be calculated.");
}
else
{
  Console.WriteLine("Average of values: " + (1.0 * sum / value));
}
```
  
This is not a coding exorcist.
</Exercise>
  

  <Exercise title={'1.5'}>
  
    You will find following structure in the exercise:
  
```cs
using System;

namespace exercise_05
{
    class Program
    {
        public static void Main(string[] args)
        {
            string name = "Ada Lovelace";
            // Write your code here:
            
        }
    }
}
```

Modify the code, so that it prints **Hello Ada LoveLace!**
Do not modify the variable content!
    
  </Exercise>

<Note>This is just a message for someone to read</Note>
