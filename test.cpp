#include <iostream>
using namespace std;

int main()
{
    int fish = 5;
    cout << &fish << endl; //& means address of
    int *fishpointer;
    fishpointer = NULL;
    cout << "fishpointer \n";
    cout << fishpointer << endl;
    cout << "*fishpoint  \n";
    cout << *fishpointer;

    return 0;
}