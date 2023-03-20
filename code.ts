async ngOnInit() {
    try {
      await authorizeUserbySettinginLocalStorage();  --> return Promise here
      await getUserDataandParseTheDataofUserToUseInBrowser(); ---> return Promise Here
      await getallAppUsersofApi; --> return Promise here
      activeMessageTab(this.activeMessageTab);
  
      this.sentMessages()
      this.sentAttachments;
      this.closeMenu();
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }


//promise Example

authorizeUserbySettinginLocalStorage(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get('url', { observe: 'response' })
        .subscribe({
          next: (res: any) => {
            console.log(res)
            resolve();
          },
          error: (error: any) => {
            reject(error)
          }
        } 
        );
    });
  }

