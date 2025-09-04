#include<stdio.h> 
#include<conio.h>


    
int fib (int n){
    if (n==0){
        return 0;
        if (n==1){
            return 1;
            return fib(n-1)+ fib(n-2);

        }
    }
}

int main(){
    int choice, n;
    while (1){
        printf("\nFibonacci menu");
        printf("1. Nth Fibonacci");
        printf("2. Generate fibonacci series yp to n terms");
        printf("Enter your choice (1 or 2)");
        scanf("%d",&n);
        if (choice !=1 && choice !=2){
            printf("Invalid Choice PLease enter valid choice");
            continue;

        }

        printf("Enter the value of N ");
        scanf("%d",&n);
        if(n<0){
            printf("N shouls be a non-negative integer");

        } if (choice == 1 ){
            printf("the %dth fibonacci number is %d\n",n,fib);


    }else if (choice==9){
        printf("Fibonacci series up to %d terms ::\n",n);
        for(int i=0;i<n;i++){
            printf("%d",fib(i));

        }
        printf("\n");

    }
}
    return 0;
}
