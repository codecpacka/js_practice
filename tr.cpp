#include <stdio.h>
#include <stdlib.h>
#include <iostream>
using namespace std;
struct node
{
    int data;
    node *next;
};

node *insert(struct node *head, int num)
{
    cout << head->data << endl;
    if (head == 0)

    {
        cout << "inside if block";
        head->data = num;
        head->next = NULL;
        cout << "data inserted";
        return head;
    }
    else
    {
        cout << "inside else block";
        struct node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->data = num;
        return head;
    }
};                                                    //inserting new number
void search(struct node *head, int num);              //searching an number
void update(struct node *head, int num, int new_num); //updating value of an existing node
void sort(struct node *head);                         //sorting an number
void display(struct node *head)
{
    if (head == 0)
    {
        cout << "linked list empty";
    }
    else
    {

        while (head)
        {
            cout << head->data << "->";
            head = head->next;
        }
    }
}
//defining data structure

int main()
{

    node *head = NULL;
    node *temp;
    int ch;
    int num, new_num;
    do
    {
        cout << "1.insert \n";
        cout << "2.update \n";
        cout << "3.search \n";
        cout << "4.sort \n";
        cout << "0. to exit \n";
        cout << "enter your choice :-\t";
        cin >> ch;
        switch (ch)
        {
        case 1:
            cout << "enter a number:- \t";
            cin >> num;
            cout << head;
            head = insert(head, num);
            cout << "displayed";
            display(head);
            break;
        default:
            cout << "enter a valid choice";
        };
    } while (ch != 0);
    return 0;
}
