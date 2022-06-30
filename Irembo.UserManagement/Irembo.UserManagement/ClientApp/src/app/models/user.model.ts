// =============================


// =============================

export class User {
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
  constructor(
    id?: string,
    userName?: string,
    fullName?: string,
    email?: string,
    jobTitle?: string,
    phoneNumber?: string,
    roles?: string[],
    Age?:number,
    Gender?:string,
    DateOfBirth?:Date,
    MaritalStatus?:string,
    Nationality?:string,
    ProfileImage?:string,
    NationanlIDImage?:string,
    IdentificationNumber?:string,
    AccountStatus?:string,


  ) {

        this.id = id;
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.Age = Age,
      this.Gender = Gender,
      this.DateOfBirth = DateOfBirth,
      this.MaritalStatus = MaritalStatus,
      this.Nationality = Nationality,
      this.ProfileImage = ProfileImage,
      this.NationanlIDImage = NationanlIDImage,
      this.IdentificationNumber = IdentificationNumber,
      this.AccountStatus = AccountStatus
    }


    get friendlyName(): string {
        let name = this.fullName || this.userName;

        if (this.jobTitle) {
            name = this.jobTitle + ' ' + name;
        }

        return name;
    }


    public id: string;
    public userName: string;
    public fullName: string;
    public email: string;
    public jobTitle: string;
    public phoneNumber: string;
    public isEnabled: boolean;
    public isLockedOut: boolean;
    public roles: string[];

  public Age: number;
  public Gender: string;
  public DateOfBirth: Date;
  public MaritalStatus: string;
  public Nationality: string;
  public ProfileImage: string;
  public NationanlIDImage: string;
  public IdentificationNumber: string;
  public AccountStatus: string;
}
