## Random Access Memory

- memory is for variables, storage is for files and applications
- the computer's processing unit is connected to a memory controller that has a direct connection to each unit of RAM. This allows it to *randomly access* any bits that it needs
- the processor will store a cache of recently-read memory bits that includes the contents of a given memory address + nearby memory addresses. This makes reading from sequential memory addresses faster than jumping around

## Binary Numbers

- base 2
- '0101' = 0 + 2^2 + 0 + 2^0 = 5
- unsigned integers are non-negative whole numbers
- fractions and decimals store two numbers, numerator + denominator and number + position of decimal point from leftmost digit
- negative numbers reserve leftmost bit for sign (0 = +, 1 = -)
- base 16 is hexadecimal, often prefixed with "0x" or "#"

## Fixed-Width Integers

- 1 byte = 8 bits, can store 2^8 = 256 different numbers
- 4 or 8 byte (32 or 64 bits) typically used to store numbers
- fixed-width integers take up constant(O(1)) space and simple operations on them take constant time

## Arrays

- great for random access
- storage of items is contiguous (uninterrupted) in memory. There can't be any gaps in the array, so you need a big block of uninterrupted free memory to store it

## Strings

- numbers are mapped to characters

## Pointers

- an array of arrays could be stored contiguously, but this would probably result in wasted space as each item in an array must be the same size
- this can be solved with pointers where the main array holds the address in memory of its corresponding array, and the nested arrays can be stored anywhere there is available space
- this also means the nested arrays don't need to be matching in length
- downside to this is that it isn't cache-friendly since items aren't necessarily going to be stored close to each other in memory

## Dynamic Arrays

- lower-level language require that the number of indices within an array be declared at creation (C)
- higher-level languages use dynamic arrays as a default array-like data structure (Python, Ruby, JavaScript)
- some languages have both (Java uses *array* for static arrays and *ArrayList* for dynamic ones)
- when a dynamic array's underlying static array is completely filled up and a new item is pushed in, a new array is created (usually twice as long). Each element from the old array is copied into the new one, and the old array is now freed up to have its memory used for something else. The item to be pushed in is appended to the new array
- appending to a dynamic array is O(1) on average, but O(n) in a worst-case scenario that requires a doubling of the underlying static array
- the advantage of a dynamic array is the ability to not have to specify size ahead of time
- disadvantage is that some appends can be expensive

## Linked Lists

- a data structure with nodes that contain the value to be stored, and a pointer to the next node
- advantage is that appending or inserting into linked lists is a worst-case O(1) operation since nodes don't have to be stored contiguously, which means every other node is unaffected by the addition of another one. Insertion into the first index of a dynamic array is an O(n) operation since every other value needs to be moved one index down
- disadvantage is that random access is impossible. Lookups in a linked list are worst-case O(n) operations and walking down a linked list is not cache-friendly

## Hash Tables

- a data structure used to check the frequency of a value's occurrences
- the key (the value itself) is mapped to an index in an array with a "hashing function", while the count is the value stored in that index
- a problem can occur if there is a "hashing collision", where two values hash to the same key
- a common way to resolve this error is to have each array slot hold a pointer to a linked list that contains both the value being counted and its count, along with a pointer to the next node
- hashing collisions should be rare enough that this solution doesn't make the time complexity of hash table lookups more than O(1)