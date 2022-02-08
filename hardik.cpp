#include <bits/stdc++.h>
#include <iostream>
#include <stdlib.h>
#include <conio.h>
using namespace std;

typedef struct node
{
    int value;
    node *next;
} Node;

void display(node *head)
{
    struct node *ptr;
    ptr = head;
    while (ptr != NULL)
    {
        cout << ptr->value << "-> ";
        ptr = ptr->next;
    }
}
int main()
{
    int num;
    node *ptr, *head = NULL, *temp;
    printf("enter= -1 if you want to stop makking node\n");

    while (1)
    {
        printf("enter the num\n");
        scanf("%d", &num);

        if (num == -1)
        {
            break;
        }
        else
        {
            ptr = (node *)malloc(sizeof(node));
            ptr->value = num;
            ptr->next = NULL;

            if (head == NULL)
            {
                head = ptr;
                temp = ptr;
                continue;
            }
            temp->next = ptr;
            temp = temp->next;
        }
    }
    display(head);
    return 0;
}