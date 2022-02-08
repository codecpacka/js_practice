#include <iostream>
#include <stdlib.h>
using namespace std;

struct node
{
    int data;
    node *next;
};
//function prototypes
node *insert(node *, int);
void display(node *);
void search(node *, int);
node *del(node *, int);
//main function starts
int main()
{
    node *head;
    int ch, value;
    head = NULL;
    do
    {

        cout << "1.insert\n";
        cout << "2.delete \n";
        cout << "3.search\n";
        cout << "4.sort \n";
        cout << "5.display\n";
        cout << "0.for exit\n";
        cout << "enter your choice \t ";
        cin >> ch;

        switch (ch)
        {
        case 1:
            cout << "enter a number \t";
            cin >> value;
            head = insert(head, value);
            break;
        case 3:
            cout << "\n enter the element u want to search \t ";
            cin >> value;
            search(head, value);
            break;
        case 5:
            display(head);
            break;
        default:
            cout << "\n enter a valid choice \n";
        };

    } while (ch != 0);
    return 0;
}
//insert function
node *insert(node *head, int value)
{
    if (head == NULL)
    {
        // cout << "inside if block \n";
        node *newnode = (node *)malloc(sizeof(node));
        newnode->data = value;
        newnode->next = NULL;
        head = newnode;
        return head;
    }
    else
    {
        // cout << "inside else block ";
        node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        node *newnode = (node *)malloc(sizeof(node));
        newnode->data = value;
        newnode->next = NULL;
        temp->next = newnode;
        return head;
    }
}
//dispaly defination
void display(struct node *head)
{
    if (head == NULL)
    {
        cout << "linked list empty";
    }
    else
    {
        node *temp = head;
        do
        {
            cout << temp->data << "->";
            temp = temp->next;
        } while (temp);
        cout << endl;
    }
}
//search funtion
void search(node *head, int value)
{
    if (head == NULL)
    {
        cout << "linked list empty";
    }
    else
    {
        node *temp = head;
        do
        {
            if (temp->data == value)
            {

                cout << "element found \n";
                return;
            }
            else
            {
                temp = temp->next;
            }
        } while (temp);
        cout << "element not found\n";
        cout << endl;
    }
}
//delete function
// node *del(node *head, int value)
// {
//     if (head == NULL)
//     {
//         cout << "linked list empty";
//     }
//     else
//     {
//         do
//         {
//             node *temp = head;
//             node *temp2 = head;

//             if (temp->data == value)
//             {

//                 cout << "element found \n";
//                 node *temp2 = temp;
//             }
//             else
//             {
//                 temp = temp->next;
//             }
//         } while (temp);
//         cout << "element not found\n";
//         cout << endl;
//     }
// }