type UserRolee = 'admin' | 'user';

const getDashboard = (role: UserRolee) => {
    if(role === 'admin') {
        return 'Admin dashboard';
    }
    else if(role === 'user') {
        return "User dashboard";
    }
    else {
        return "Guest dashboard"
    }
}




type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};


type EmployeeManager = Employee & Manager;

const ChowdhurySaheb : EmployeeManager = {
    id: "126",
    name: "Mr. Chowdhury",
    phoneNo: "7667687",
    designation: "Bongshio Chowdhury",
    teamSize: 20
};

