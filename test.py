from tkinter import *
from tkinter import ttk
import tkinter as tk
from tkinter import messagebox
from datetime import date
import sqlite3
conn=sqlite3.connect('Hospital.dp')
c=conn.cursor()
c.execute('''Create table IF NOT EXISTS nurse
(nurse_id number(5) not null,
nurse_name varchar2(20),
nurse_DOB  varchar2(20),
nurse_gender varchar2(6),
salary number(10),
constraint nurse_pk primary key (nurse_id)
);''')
c.execute('''create table IF NOT EXISTS  doctor
(doctor_id number(5) not null,
doctor_name varchar2(20) ,
n_id number(5),
doctor_DOB varchar2(20),
doctor_gender varchar2(6),
salary number(10),
constraint doctor_pk primary key (doctor_id),
constraint doctor_fk foreign key (n_id) references nurse (nurse_id)
);''')
c.execute('''create table IF NOT EXISTS  roomm
(room_number number(5) not null,
department varchar2(20) ,
gender varchar2(6),
constraint room_pk primary key (room_number)
);
''')
c.execute('''create table IF NOT EXISTS  patient
(patient_id number(5) not null,
patient_name varchar2(20) ,
d_id number(5),
patient_DOB varchar2(20) ,
patient_DOE varchar2(20) ,
patient_gender varchar2(6),
room_number number(4),
constraint patient_pk primary key (patient_id),
constraint roomnum_un Unique (room_number),
constraint patient_fk foreign key (D_id) references doctor (doctor_id),
constraint roomnum_fk foreign key (room_number) references roomm (room_number)
);
''')
c.execute('''create table IF NOT EXISTS  medicine
(medicine_id number(5) not null,
medicine_name varchar2(20) ,
date_of_produce varchar2(20) ,
expire_after varchar2(20),
Constraint medical_pk primary key (Medicine_id)
);
''')
c.execute('''create table IF NOT EXISTS  medical_prescription
(Patient_id number(5) not null,
medicine_id number(5) not null,
Constraint medical1_fk foreign key (Patient_id) references patient (patient_id),
Constraint medical2_fk foreign key (medicine_id) references medicine (medicine_id)
);''')
conn.close()
global l
l=True
def drop():
    try:
        mess=messagebox.askquestion ('DROP TABLES','ARE YOU SURE YOU WANT TO DROP ALL THE TABLES',icon = 'warning')
        if mess == 'yes':
            conn=sqlite3.connect('Hospital.dp')
            c=conn.cursor()
            c.execute('''drop table medical_prescription;''')
            c.execute('''drop table medicine;''')
            c.execute('''drop table patient;''')
            c.execute('''drop table roomm;''')
            c.execute('''drop table doctor;''')
            c.execute('''drop table nurse;''')
            conn.close()
            global l
            l=False
            messagebox.showinfo("Information","THE TABLES HAS BEEN DROPPED successfully")            
    except sqlite3.OperationalError:
        messagebox.showerror('error', 'THERE IS NO TABLES TO DROP')
def creat():
    try:
        conn=sqlite3.connect('Hospital.dp')
        c=conn.cursor()
        c.execute('''Create table nurse
        (nurse_id number(5) not null,
        nurse_name varchar2(20),
        nurse_DOB  varchar2(20),
        nurse_gender varchar2(6),
        salary number(10),
        constraint nurse_pk primary key (nurse_id)
        );''')
        c.execute('''create table doctor
        (doctor_id number(5) not null,
        doctor_name varchar2(20) ,
        n_id number(5),
        doctor_DOB varchar2(20),
        doctor_gender varchar2(6),
        salary number(10),
        constraint doctor_pk primary key (doctor_id),
        constraint doctor_fk foreign key (n_id) references nurse (nurse_id)
        );''')
        c.execute('''create table roomm
        (room_number number(5) not null,
        department varchar2(20) ,
        gender varchar2(6),
        constraint room_pk primary key (room_number)
        );
        ''')
        c.execute('''create table patient
        (patient_id number(5) not null,
        patient_name varchar2(20) ,
        d_id number(5),
        patient_DOB varchar2(20) ,
        patient_DOE varchar2(20) ,
        patient_gender varchar2(6),
        room_number number(4),
        constraint patient_pk primary key (patient_id),
        constraint roomnum_un Unique (room_number),
        constraint patient_fk foreign key (D_id) references doctor (doctor_id),
        constraint roomnum_fk foreign key (room_number) references roomm (room_number)
        );
        ''')
        c.execute('''create table medicine
        (medicine_id number(5) not null,
        medicine_name varchar2(20) ,
        date_of_produce varchar2(20) ,
        expire_after varchar2(20),
        Constraint medical_pk primary key (Medicine_id)
        );
        ''')
        c.execute('''create table medical_prescription
        (Patient_id number(5) not null,
        medicine_id number(5) not null,
        Constraint medical1_fk foreign key (Patient_id) references patient (patient_id),
        Constraint medical2_fk foreign key (medicine_id) references medicine (medicine_id)
        );''')
        conn.close()
        global l
        l=True
        messagebox.showinfo("Information","THE TABLES HAS BEEN CREATED successfully")
    except sqlite3.OperationalError:
        messagebox.showerror('error', 'THE TABLES ALREADY EXIST')
def about():
    root.withdraw()
    ab=Toplevel(root)
    ab.geometry('1080x500')
    x_Left = int(ab.winfo_screenwidth()/2 - 1080/2)
    y_Top = int(ab.winfo_screenheight()/2 - 500/2)
    ab.geometry("+{}+{}".format(x_Left, y_Top))
    ab.resizable(False, False)
    ab.title("ABOUT")
    Label(ab,image=logo).place(x=50,y=0)
    o = Scrollbar(ab)
    o.pack(side='right', fill=Y)
    p = Text(ab, height=18, width=60,bg="#ddedea",fg='#679878', font=("Helvetica",16,"bold"), relief=SUNKEN)
    p.place(x=300,y=50)
    p.insert(END, "WELCOME\n")
    p.insert(END, '''to our program which is designed for a Healthcare Organization\nat first the program will check if the tables are exist or not
if there is no tables the program will creat them
in the program you creat or drop the database as like as you want
after the tables are created you can do a variety of operation like:
1.Insert\n2.Update\n3.View\n4.Delete
by click on a button after chosing the
operation there will be six tabels to do the operation in like: \n1.Nurse\n2.Doctor\n3.Room\n4.Patient\n5.Medicine\n6.Medical Prescription
after chosing the operation a toplevel window will open to do the
operation you chosed on the table you chosed

Hints:

1. if You create tables and click on button called (drop table)
it will drop all tables in the program which is
(Nurse, Doctor, Room, Patient, Medicine, Medical prescription)

2. if You drop tables you cannot do operation like
(insert, update, view, delete). 
And to activate the operation you must click on button called
(create table) to create all tables in the program

this program is created by:
Ali Ibrahim Ali Ibrahim
Abdelrhman alaa mohmed hessin
Mubarak Badrawi
Iman Salah
Mohammed Ibrahim Ahmed Ahmed Al-Boushi''')
    o.config(command=p.yview)
    p.config(yscrollcommand=o.set)
    p.config(state=DISABLED)   
    def showtr():
        root.deiconify()
        ab.withdraw()
    Button(ab,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showtr).pack(side='left')


root=Tk()
root.geometry('1080x500')
x_Left = int(root.winfo_screenwidth()/2 - 1080/2)
y_Top = int(root.winfo_screenheight()/2 - 500/2)
root.geometry("+{}+{}".format(x_Left, y_Top))
root.resizable(False, False)
root.title('Hospital')
logo=PhotoImage(file="C:/Users/THE LAPTOP SHOP/Desktop/Untitled-1.png")
l2 = list(range(1, 13))

l1 = list(range(1, 32))

l3 = list(range(1970, date.today().year+1))
style= ttk.Style()
style.theme_use('clam')
Label(root,image=logo).place(x=0,y=0)
"""========================================================================================================================="""
def insert():
    if l:
        root.withdraw()
        t1=Toplevel(root)
        t1.geometry('1080x500')
        x_Left = int(t1.winfo_screenwidth()/2 - 1080/2)
        y_Top = int(t1.winfo_screenheight()/2 - 500/2)
        t1.geometry("+{}+{}".format(x_Left, y_Top))
        t1.resizable(False, False)
        t1.title("Insert")
        Label(t1,image=logo).place(x=0,y=0)
        def inDoctor():
            t1.withdraw()
            ti1=Toplevel(t1)
            ti1.geometry('1080x500')
            x_Left = int(ti1.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(ti1.winfo_screenheight()/2 - 500/2)
            ti1.geometry("+{}+{}".format(x_Left, y_Top))
            ti1.resizable(False, False)
            ti1.title("Insert in Doctor")
            Label(ti1,image=logo).place(x=0,y=0)
            v = tk.StringVar()
            did_var=tk.StringVar()
            dname_var=tk.StringVar()
            nid_var=tk.StringVar()
            sal_var=tk.StringVar()
            v.set("false")
            def run():
                y=False
                try:
                    conn=sqlite3.connect('Hospital.dp')
                    c=conn.cursor()
                    for x in c.execute('''select nurse_id from nurse;'''):
                        if str(x) == '('+nid_var.get()+',)':
                            y=True
                            break
                    conn.close()
                    try:
                        int(did_var.get())
                        int(nid_var.get())
                        float(sal_var.get())
                        z=True
                    except:
                        z=False
                            
                    if y:
                        if z and int(did_var.get())>=0 and int(nid_var.get())>=0 and float(sal_var.get())>=0:
                            conn=sqlite3.connect('Hospital.dp')
                            c=conn.cursor()
                            c.execute("insert into doctor values (?, ?, ?, ?, ?, ?)", (did_var.get(), dname_var.get(),nid_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),v.get(),sal_var.get()))
                            conn.commit()
                            conn.close()
                            messagebox.showinfo("Information","the record has been inserted successfully")
                            did_var.set("")
                            dname_var.set("")
                            nid_var.set("")
                            Combo1.set("1")
                            Combo2.set("1")
                            Combo3.set("1970")
                            v.set("Male")
                            sal_var.set("")
                        else:
                            messagebox.showerror('error', 'invalid value')
                            
                    else:
                        messagebox.showerror('error', 'nurse id don\'t exist')
                except sqlite3.IntegrityError:
                    messagebox.showerror('error', 'this id is repeted')

                    
            Label(ti1, padx=10, text="Doctor id:").grid(row=0, column=0)
            a=tk.Entry(ti1,textvariable = did_var,fg="#4b9085").grid(row=0, column=1)
            Label(ti1, padx=10, text="Doctor name:").grid(row=1, column=0,pady=20)
            Entry(ti1,textvariable = dname_var,fg="#4b9085").grid(row=1, column=1,pady=20)
            Label(ti1, padx=10, text="Nurse id:").grid(row=2, column=0,pady=20)
            Entry(ti1,textvariable = nid_var,fg="#4b9085").grid(row=2, column=1,pady=20)
            Label(ti1, padx=10, text="Doctor DOB:").grid(row=3, column=0,pady=20)
            Combo1 = ttk.Combobox(ti1, values = l1, state='readonly')
            Combo1.set("1")
            Combo1.grid(row=3, column=1,pady=20)

            Combo2 = ttk.Combobox(ti1, values = l2, state='readonly')
            Combo2.set("1")
            Combo2.grid(row=3, column=2,pady=20)

            Combo3 = ttk.Combobox(ti1, values = l3, state='readonly')
            Combo3.set("1970")
            Combo3.grid(row=3, column=3,pady=20)
            Label(ti1, padx=10, text="Gender:").grid(row=4, column=0,pady=20)
            r1=tk.Radiobutton(ti1, text="Male",variable=v, value="Male").grid(row=4, column=1,pady=20)
            r2=tk.Radiobutton(ti1, text="Female",variable=v, value="Female").grid(row=4, column=2,pady=20)
            v.set("Male")
            Label(ti1, padx=10, text="Salary:").grid(row=5, column=0,pady=20)
            Entry(ti1,textvariable = sal_var,fg="#4b9085").grid(row=5, column=1,pady=20)
            def showroot():
                root.deiconify()
                ti1.withdraw()
            Button(ti1,text="EXIT",font=("times",16),fg="white",bg="#b02121", relief=GROOVE  ,command=showroot).grid(row=6,column=10,padx=423)
            def showt1():
                t1.deiconify()
                ti1.withdraw()
            Button(ti1,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).grid(row=6,pady=60)
            Button(ti1,text="Insert",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).grid(row=6,column=4)

            ######################################################################################################################
        def inNurse():
            t1.withdraw()
            ti2=Toplevel(t1)
            ti2.geometry('1080x500')
            x_Left = int(ti2.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(ti2.winfo_screenheight()/2 - 500/2)
            ti2.geometry("+{}+{}".format(x_Left, y_Top))

            ti2.resizable(False, False)
            ti2.title("Insert in Nurse")
            Label(ti2,image=logo).place(x=0,y=0)
            
            v = tk.StringVar()
            nid_var=tk.StringVar()
            nname_var=tk.StringVar()
            sal_var=tk.StringVar()
            v.set("false")
            
            def run():
                try:
                    try:
                        int(nid_var.get())
                        float(sal_var.get())
                        y=True
                    except:
                        y=False
                    if y and int(nid_var.get())>=0 and float(sal_var.get())>=0:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute("insert into nurse values (?, ?, ?, ?, ?)", (nid_var.get(), nname_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),v.get(),sal_var.get()))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been inserted successfully")
                        nid_var.set("")
                        nname_var.set("")
                        Combo1.set("1")
                        Combo2.set("1")
                        Combo3.set("1970")
                        v.set("Male")
                        sal_var.set("")

                    else:
                        messagebox.showerror('error', 'invalid value')
                    
                except sqlite3.IntegrityError:
                    messagebox.showerror('error', 'this id is repeted')
                
                    
            Label(ti2, padx=10, text="Nurse id:").grid(row=0, column=0,pady=20)
            Entry(ti2,textvariable = nid_var,fg="#4b9085").grid(row=0, column=1)
            Label(ti2, padx=10, text="Nurse name:").grid(row=1, column=0,pady=20)
            Entry(ti2,textvariable = nname_var,fg="#4b9085").grid(row=1, column=1)
            Label(ti2, padx=10, text="Nurse DOB:").grid(row=3, column=0,pady=20)
            Combo1 = ttk.Combobox(ti2, values = l1, state='readonly')
            Combo1.set("1")
            Combo1.grid(row=3, column=1,pady=20)

            Combo2 = ttk.Combobox(ti2, values = l2, state='readonly')
            Combo2.set("1")
            Combo2.grid(row=3, column=2,pady=20)

            Combo3 = ttk.Combobox(ti2, values = l3, state='readonly')
            Combo3.set("1970")
            Combo3.grid(row=3, column=3,pady=20)
            Label(ti2, padx=10, text="Gender:").grid(row=4, column=0,pady=20)
            r1=tk.Radiobutton(ti2, text="Male",variable=v, value="Male").grid(row=4, column=1,pady=20)
            r2=tk.Radiobutton(ti2, text="Female",variable=v, value="Female").grid(row=4, column=2,pady=20)
            v.set("Male")
            Label(ti2, padx=10, text="Salary:").grid(row=5, column=0,pady=20)
            Entry(ti2,textvariable = sal_var,fg="#4b9085").grid(row=5, column=1,pady=20)

            def showroot():
                root.deiconify()
                ti2.withdraw()
            Button(ti2,text="EXIT",font=("times",16),fg="white",bg="#b02121", relief=GROOVE  ,command=showroot).grid(row=6,column=10,padx=423)
            def showt1():
                t1.deiconify()
                ti2.withdraw()
            Button(ti2,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).grid(row=6,pady=60)
            Button(ti2,text="Insert",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).grid(row=6,column=4)

            ######################################################################################################################
        def inRoom():
            t1.withdraw()
            ti6=Toplevel(t1)
            ti6.geometry('1080x500')
            x_Left = int(ti6.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(ti6.winfo_screenheight()/2 - 500/2)
            ti6.geometry("+{}+{}".format(x_Left, y_Top))
            ti6.resizable(False, False)
            ti6.title("Insert in room")
            Label(ti6,image=logo).place(x=0,y=0)
            v = tk.StringVar()
            roomnum_var=tk.StringVar()
            dep_var=tk.StringVar()
            v.set("false")
            def run():
                try:
                    try:
                        int(roomnum_var.get())
                        y=True
                    except:
                        y=False
                    if y and int(roomnum_var.get())>=0:
                        
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute("insert into roomm values (?, ?, ?)", (roomnum_var.get(), dep_var.get(), v.get()))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been inserted successfully")
                        roomnum_var.set("")
                        dep_var.set("")
                        v.set("Male")

                    else:
                        messagebox.showerror('error', 'invalid value')
                except sqlite3.IntegrityError:
                    messagebox.showerror('error', 'this id is repeted')
            
            Label(ti6, padx=10, text="Room Number:").grid(row=0, column=0)
            Entry(ti6,textvariable = roomnum_var,fg="#4b9085").grid(row=0, column=1)
            Label(ti6, padx=10, text="Department:").grid(row=1, column=0,pady=20)
            Entry(ti6,textvariable = dep_var,fg="#4b9085").grid(row=1, column=1,pady=20)
            Label(ti6, padx=10, text="Gender:").grid(row=2, column=0,pady=20)
            tk.Radiobutton(ti6, text="Male",variable=v, value="Male").grid(row=2, column=1,pady=20)
            tk.Radiobutton(ti6, text="Female",variable=v, value="Female").grid(row=2, column=2,pady=20)
            v.set("Male")
            def showroot():
                root.deiconify()
                ti6.withdraw()
            Button(ti6,text="EXIT",font=("times",16),fg="white",bg="#b02121", relief=GROOVE  ,command=showroot).grid(row=6,column=10,padx=295)
            def showt1():
                t1.deiconify()
                ti6.withdraw()
            Button(ti6,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).grid(row=6,pady=225)
            Button(ti6,text="Insert",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).grid(row=6,column=6,padx=180)
            ######################################################################################################################
        def inPatient():
            t1.withdraw()
            ti3=Toplevel(t1)
            ti3.geometry('1080x500')
            x_Left = int(ti3.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(ti3.winfo_screenheight()/2 - 500/2)
            ti3.geometry("+{}+{}".format(x_Left, y_Top))
            ti3.resizable(False, False)
            ti3.title("Insert in Patient")
            Label(ti3,image=logo).place(x=0,y=0)
            v = tk.StringVar()
            pid_var=tk.StringVar()
            pname_var=tk.StringVar()
            did_var=tk.StringVar()
            roomnum_var=tk.StringVar()
            v.set("false")
            
            def run():
                    y=False
                    z=False
                    b=False
                    
                    try:
                        try:
                            int(pid_var.get())
                            int(did_var.get())
                            int(roomnum_var.get())
                            a=True
                        except:
                            a=False
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x in c.execute('''select doctor_id from doctor;'''):
                            if str(x) == '('+did_var.get()+',)':
                                y=True
                                break
                        for x in c.execute('''select room_number from roomm;'''):
                            if str(x) == '('+roomnum_var.get()+',)':
                                z=True
                                break
                        for x in c.execute('''select gender from roomm where room_number = ?;''', (roomnum_var.get(),)):
                            n='(\''+v.get()+'\',)'
                            if str(x) == n:
                                b=True
                                break
                        conn.close()
                        if y:
                            if z:
                                if a and int(pid_var.get())>=0 and int(did_var.get())>=0 and int(roomnum_var.get())>=0:
                                    if b:
                                        conn=sqlite3.connect('Hospital.dp')
                                        c=conn.cursor()
                                        c.execute("insert into patient values (?, ?, ?, ?, ?, ?, ?)", (pid_var.get(), pname_var.get(),did_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),str(date.today().day)+'/'+str(date.today().month)+'/'+str(date.today().year),v.get(),roomnum_var.get()))
                                        conn.commit()
                                        conn.close()
                                        messagebox.showinfo("Information","the record has been inserted successfully")
                                        pid_var.set("")
                                        pname_var.set("")
                                        did_var.set("")
                                        Combo1.set("1")
                                        Combo2.set("1")
                                        Combo3.set("1970")
                                        v.set("Male")
                                        roomnum_var.set("")

                                    else:
                                        if v.get() == 'Male':
                                            messagebox.showerror('error', 'sorry but this room isn\'t for Male')
                                        elif v.get() == 'Female':
                                            messagebox.showerror('error', 'sorry but this room isn\'t for Female')
                                else:
                                    messagebox.showerror('error', 'invalid value')
                            else:
                                messagebox.showerror('error', 'room number don\'t exist')
                        else:
                            messagebox.showerror('error', 'doctor id don\'t exist')
                    except sqlite3.IntegrityError:
                        messagebox.showerror('error', 'this id is repeted or the room isn\'t available')
                
            Label(ti3, padx=10, text="Patient id:").grid(row=0, column=0)
            Entry(ti3,textvariable = pid_var,fg="#4b9085").grid(row=0, column=1)
            Label(ti3, padx=10, text="Patient name:").grid(row=1, column=0,pady=20)
            Entry(ti3,textvariable = pname_var,fg="#4b9085").grid(row=1, column=1,pady=20)
            Label(ti3, padx=10, text="Doctor id:").grid(row=2, column=0,pady=20)
            Entry(ti3,textvariable = did_var,fg="#4b9085").grid(row=2, column=1,pady=20)
            Label(ti3, padx=10, text="Patient DOB:").grid(row=3, column=0,pady=20)
            Combo1 = ttk.Combobox(ti3, values = l1, state='readonly')
            Combo1.set("1")
            Combo1.grid(row=3, column=1,pady=20)

            Combo2 = ttk.Combobox(ti3, values = l2, state='readonly')
            Combo2.set("1")
            Combo2.grid(row=3, column=2,pady=20)

            Combo3 = ttk.Combobox(ti3, values = l3, state='readonly')
            Combo3.set("1970")
            Combo3.grid(row=3, column=3,pady=20)
            Label(ti3, padx=10, text="Gender:").grid(row=4, column=0,pady=20)
            r1=tk.Radiobutton(ti3, text="Male",variable=v, value="Male").grid(row=4, column=1,pady=20)
            r2=tk.Radiobutton(ti3, text="Female",variable=v, value="Female").grid(row=4, column=2,pady=20)
            v.set("Male")
            Label(ti3, padx=10, text="Room number:").grid(row=5, column=0,pady=20)
            Entry(ti3,textvariable = roomnum_var,fg="#4b9085").grid(row=5, column=1,pady=20)
            def showroot():
                root.deiconify()
                ti3.withdraw()
            Button(ti3,text="EXIT",font=("times",16),fg="white",bg="#b02121", relief=GROOVE  ,command=showroot).grid(row=6,column=10,padx=423)
            def showt1():
                t1.deiconify()
                ti3.withdraw()
            Button(ti3,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).grid(row=6,pady=60)
            Button(ti3,text="Insert",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).grid(row=6,column=4)
            ####################################################################################
        def inMedicine():
            t1.withdraw()
            ti5=Toplevel(t1)
            ti5.geometry('1080x500')
            x_Left = int(ti5.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(ti5.winfo_screenheight()/2 - 500/2)
            ti5.geometry("+{}+{}".format(x_Left, y_Top))
            ti5.resizable(False, False)
            ti5.title("Insert in medicine")
            Label(ti5,image=logo).place(x=0,y=0)

            v = tk.StringVar()
            mid_var=tk.StringVar()
            mname_var=tk.StringVar()
            exp_var=tk.StringVar()
            v.set("false")
            def run():
                    try:
                        try:
                            int(mid_var.get())
                            int(exp_var.get())
                            a=True
                        except:
                            a=False
                        if a and int(mid_var.get())>=0 and int(exp_var.get())>=0:
                            conn=sqlite3.connect('Hospital.dp')
                            c=conn.cursor()
                            c.execute("insert into medicine values (?, ?, ?, ?)", (mid_var.get(), mname_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),exp_var.get()+v.get()))
                            conn.commit()
                            conn.close()
                            messagebox.showinfo("Information","the record has been inserted successfully")
                            mid_var.set("")
                            mname_var.set("")
                            Combo1.set("1")
                            Combo2.set("1")
                            Combo3.set("1970")
                            exp_var.set("")
                            v.set("weeks")

                        else:
                            messagebox.showerror('error', 'invalid value')
                    except sqlite3.IntegrityError:
                        messagebox.showerror('error', 'this id is repeted')
                
            Label(ti5, padx=10, text="Medicine id:").grid(row=0, column=0)
            Entry(ti5,textvariable = mid_var,fg="#4b9085").grid(row=0, column=1)
            Label(ti5, padx=10, text="Medicine name:").grid(row=1, column=0,pady=20)
            Entry(ti5,textvariable = mname_var,fg="#4b9085").grid(row=1, column=1,pady=20)
            Label(ti5, padx=10, text="Date Of Produce:").grid(row=2, column=0,pady=20)
            Combo1 = ttk.Combobox(ti5, values = l1, state='readonly')
            Combo1.set("1")
            Combo1.grid(row=2, column=1,pady=20)

            Combo2 = ttk.Combobox(ti5, values = l2, state='readonly')
            Combo2.set("1")
            Combo2.grid(row=2, column=2,pady=20)

            Combo3 = ttk.Combobox(ti5, values = l3, state='readonly')
            Combo3.set("1970")
            Combo3.grid(row=2, column=3,pady=20)
            Label(ti5, padx=10, text="Expire After:").grid(row=3, column=0,pady=20)
            Entry(ti5,textvariable = exp_var,fg="#4b9085").grid(row=3, column=1,pady=20)
            tk.Radiobutton(ti5, text="weeks",variable=v, value="weeks").grid(row=3, column=2,pady=20)
            tk.Radiobutton(ti5, text="Months",variable=v, value="Months").grid(row=3, column=3,pady=20)
            tk.Radiobutton(ti5, text="years",variable=v, value="years").grid(row=3, column=4,pady=20)
            v.set("weeks")
            def showroot():
                root.deiconify()
                ti5.withdraw()
            Button(ti5,text="EXIT",font=("times",16),fg="white",bg="#b02121", relief=GROOVE  ,command=showroot).grid(row=6,column=10,padx=405)
            def showt1():
                t1.deiconify()
                ti5.withdraw()
            Button(ti5,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).grid(row=6,pady=200)
            Button(ti5,text="Insert",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).grid(row=6,column=4)
            ########################################################################################################################

        def inmedical_prescription():
            t1.withdraw()
            ti4=Toplevel(t1)
            ti4.geometry('1080x500')
            x_Left = int(ti4.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(ti4.winfo_screenheight()/2 - 500/2)
            ti4.geometry("+{}+{}".format(x_Left, y_Top))
            ti4.resizable(False, False)
            ti4.title("Insert in Medical Prescription")
            Label(ti4,image=logo).place(x=0,y=0)
            pid_var=tk.StringVar()
            mid_var=tk.StringVar()
            def run():
                y=False
                z=False
                try:
                    int(pid_var.get())
                    int(mid_var.get())
                    a=True
                except:
                    a=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()                
                for x in c.execute('''select patient_id from patient;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                for x in c.execute('''select medicine_id from medicine;'''):
                    if str(x) == '('+mid_var.get()+',)':
                        z=True
                        break
                conn.close()
                if a and int(pid_var.get())>=0 and int(mid_var.get())>=0:
                    if y:
                        if z:
                            conn=sqlite3.connect('Hospital.dp')
                            c=conn.cursor()
                            c.execute("insert into medical_prescription values (?, ?)", (pid_var.get(), mid_var.get()))
                            conn.commit()
                            conn.close()
                            messagebox.showinfo("Information","the record has been inserted successfully")
                            pid_var.set("")
                            mid_var.set("")

                        else:
                            messagebox.showerror('error', 'medicine id don\'t exist')
                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                
            Label(ti4, padx=10, text="Pateint id:").grid(row=0, column=0)
            Entry(ti4,textvariable = pid_var,fg="#4b9085").grid(row=0, column=1)
            Label(ti4, padx=10, text="Medicine id:").grid(row=1, column=0,pady=20)
            Entry(ti4,textvariable = mid_var,fg="#4b9085").grid(row=1, column=1,pady=20)

            def showroot():
                root.deiconify()
                ti4.withdraw()
            Button(ti4,text="EXIT",font=("times",16),fg="white",bg="#b02121", relief=GROOVE  ,command=showroot).grid(row=6,column=10,padx=150)
            def showt1():
                t1.deiconify()
                ti4.withdraw()
            Button(ti4,text="Insert",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).grid(row=6,column=6,padx=290)
            Button(ti4,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).grid(row=6,pady=290)

        Label(t1, padx=10, text="Chose from the next four buttons to insert into:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack()
        def showt1():
            root.deiconify()
            t1.withdraw()
        Button(t1,text="<--BACK",font=("times",16),fg="white",bg="#d49898", relief=GROOVE  ,command=showt1).pack(side="bottom")
        Button(t1,text="Nurse",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=inNurse).pack(side="left",padx=40)
        Button(t1,text="Doctor",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=inDoctor).pack(side="left",padx=40)
        Button(t1,text="Room",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=inRoom).pack(side="left",padx=40)
        Button(t1,text="Patient",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=inPatient).pack(side="left",padx=40)
        Button(t1,text="Medicine",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=inMedicine).pack(side="left",padx=40)
        Button(t1,text="Medical Prescription",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=inmedical_prescription).pack(side="left",padx=40)
    else:
        messagebox.showerror('error', 'THERE IS NO TABLE TO INSERT INTO')
    

##################################################################################################################################
def update():
    if l:
        root.withdraw()
        t2=Toplevel(root)
        t2.geometry('1080x500')
        x_Left = int(t2.winfo_screenwidth()/2 - 1080/2)
        y_Top = int(t2.winfo_screenheight()/2 - 500/2)
        t2.geometry("+{}+{}".format(x_Left, y_Top))
        t2.resizable(False, False)
        t2.title("Update")
        Label(t2,image=logo).place(x=0,y=0)
        def upDoctor():
            t2.withdraw()
            tu1=Toplevel(t2)
            tu1.geometry('1080x500')
            x_Left = int(tu1.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tu1.winfo_screenheight()/2 - 500/2)
            tu1.geometry("+{}+{}".format(x_Left, y_Top))
            tu1.resizable(False, False)
            tu1.title("Update in Doctor")
            Label(tu1,image=logo).place(x=0,y=0)
            did_var=StringVar()
            def run1():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select doctor_id from doctor;'''):
                    if str(x) == '('+did_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(did_var.get())
                    z=True
                except:
                    z=False
                if z and int(did_var.get())>=0:
                    if y:
                        tuu1=Toplevel(tu1)
                        tuu1.geometry('1080x500')
                        x_Left = int(tuu1.winfo_screenwidth()/2 - 1080/2)
                        y_Top = int(tuu1.winfo_screenheight()/2 - 500/2)
                        tuu1.geometry("+{}+{}".format(x_Left, y_Top))

                        tuu1.resizable(False, False)
                        tuu1.title("Update in Doctor")
                        Label(tuu1,image=logo).place(x=0,y=0)
                        v = tk.StringVar()
                        dname_var=tk.StringVar()
                        nid_var=tk.StringVar()
                        sal_var=tk.StringVar()
                        v.set("false")
                        def run():
                            y1=False
                            conn=sqlite3.connect('Hospital.dp')
                            c=conn.cursor()
                            for x in c.execute('''select nurse_id from nurse;'''):
                                if str(x) == '('+nid_var.get()+',)':
                                    y1=True
                                    break
                            conn.close()
                            try:
                                int(nid_var.get())
                                float(sal_var.get())
                                z1=True
                            except:
                                z1=False
                                    
                            if y1:
                                if z1 and int(nid_var.get())>=0 and float(sal_var.get())>=0:
                                    conn=sqlite3.connect('Hospital.dp')
                                    c=conn.cursor()
                                    c.execute('''update doctor
                                    set doctor_name = ?, n_id = ?,doctor_DOB = ?,doctor_gender = ?,salary = ?
                                    WHERE doctor_id  = ?;''', (dname_var.get(),nid_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),v.get(),sal_var.get(),did_var.get()))
                                    conn.commit()
                                    conn.close()
                                    tuu1.withdraw()
                                    messagebox.showinfo("Information","the record has been updated successfully")
                                else:
                                    messagebox.showerror('error', 'invalid value')
                                        
                            else:
                                messagebox.showerror('error', 'nurse id don\'t exist')

                                
                        Label(tuu1, padx=10, text="Doctor name:").grid(row=1, column=0,pady=20)
                        Entry(tuu1,textvariable = dname_var,fg="#4b9085").grid(row=1, column=1,pady=20)
                        Label(tuu1, padx=10, text="Nurse id:").grid(row=2, column=0,pady=20)
                        Entry(tuu1,textvariable = nid_var,fg="#4b9085").grid(row=2, column=1,pady=20)
                        Label(tuu1, padx=10, text="Doctor DOB:").grid(row=3, column=0,pady=20)
                        Combo1 = ttk.Combobox(tuu1, values = l1, state='readonly')
                        Combo1.set("1")
                        Combo1.grid(row=3, column=1,pady=20)

                        Combo2 = ttk.Combobox(tuu1, values = l2, state='readonly')
                        Combo2.set("1")
                        Combo2.grid(row=3, column=2,pady=20)

                        Combo3 = ttk.Combobox(tuu1, values = l3, state='readonly')
                        Combo3.set("1970")
                        Combo3.grid(row=3, column=3,pady=20)
                        Label(tuu1, padx=10, text="Gender:").grid(row=4, column=0,pady=20)
                        r1=tk.Radiobutton(tuu1, text="Male",variable=v, value="Male").grid(row=4, column=1,pady=20)
                        r2=tk.Radiobutton(tuu1, text="Female",variable=v, value="Female").grid(row=4, column=2,pady=20)
                        v.set("Male")
                        Label(tuu1, padx=10, text="Salary:").grid(row=5, column=0,pady=20)
                        Entry(tuu1,textvariable = sal_var,fg="#4b9085").grid(row=5, column=1,pady=20)
                        Button(tuu1,text="UPDATE",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=run).grid(row=6,column=4,pady=130)

                    else:
                        messagebox.showerror('error', 'doctor id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(tu1, padx=10, text="Enter the Doctor id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu1,textvariable = did_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                tu1.withdraw()
            Button(tu1,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t2.deiconify()
                tu1.withdraw()
            Button(tu1,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tu1,text="ENTER",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run1).pack(pady=40)

        def upNurse():
            t2.withdraw()
            tu2=Toplevel(t2)
            tu2.geometry('1080x500')
            x_Left = int(tu2.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tu2.winfo_screenheight()/2 - 500/2)
            tu2.geometry("+{}+{}".format(x_Left, y_Top))
            tu2.resizable(False, False)
            tu2.title("Update in Nurse")
            Label(tu2,image=logo).place(x=0,y=0)
            nid_var=StringVar()
            def run1():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select nurse_id from nurse;'''):
                    if str(x) == '('+nid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(nid_var.get())
                    z=True
                except:
                    z=False
                if z and int(nid_var.get())>=0:
                    if y:
                        tuu2=Toplevel(tu2)
                        tuu2.geometry('1080x500')
                        x_Left = int(tuu2.winfo_screenwidth()/2 - 1080/2)
                        y_Top = int(tuu2.winfo_screenheight()/2 - 500/2)
                        tuu2.geometry("+{}+{}".format(x_Left, y_Top))
                        tuu2.resizable(False, False)
                        tuu2.title("Update in Nurse")
                        Label(tuu2,image=logo).place(x=0,y=0)
                        v = tk.StringVar()
                        nname_var=tk.StringVar()
                        sal_var=tk.StringVar()
                        v.set("false")
                        
                        def run():
                            try:
                                float(sal_var.get())
                                y1=True
                            except:
                                y1=False
                            if y1 and float(sal_var.get())>=0:
                                conn=sqlite3.connect('Hospital.dp')
                                c=conn.cursor()
                                c.execute('''update nurse
                                set nurse_name = ?, nurse_DOB = ?,nurse_gender = ?,salary = ?
                                WHERE nurse_id = ?;''', (nname_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),v.get(),sal_var.get(),nid_var.get()))
                                conn.commit()
                                conn.close()
                                tuu2.withdraw()
                                messagebox.showinfo("Information","the record has been updated successfully")
                            else:
                                messagebox.showerror('error', 'invalid value')
                                
                        Label(tuu2, padx=10, text="Nurse name:").grid(row=1, column=0,pady=20)
                        Entry(tuu2,textvariable = nname_var,fg="#4b9085").grid(row=1, column=1)
                        Label(tuu2, padx=10, text="Nurse DOB:").grid(row=3, column=0,pady=20)
                        Combo1 = ttk.Combobox(tuu2, values = l1, state='readonly')
                        Combo1.set("1")
                        Combo1.grid(row=3, column=1,pady=20)

                        Combo2 = ttk.Combobox(tuu2, values = l2, state='readonly')
                        Combo2.set("1")
                        Combo2.grid(row=3, column=2,pady=20)

                        Combo3 = ttk.Combobox(tuu2, values = l3, state='readonly')
                        Combo3.set("1970")
                        Combo3.grid(row=3, column=3,pady=20)
                        Label(tuu2, padx=10, text="Gender:").grid(row=4, column=0,pady=20)
                        r1=tk.Radiobutton(tuu2, text="Male",variable=v, value="Male").grid(row=4, column=1,pady=20)
                        r2=tk.Radiobutton(tuu2, text="Female",variable=v, value="Female").grid(row=4, column=2,pady=20)
                        v.set("Male")
                        Label(tuu2, padx=10, text="Salary:").grid(row=5, column=0,pady=20)
                        Entry(tuu2,textvariable = sal_var,fg="#4b9085").grid(row=5, column=1,pady=20)

                        Button(tuu2,text="UPDATE",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=run).grid(row=6,column=4,pady=150)

                        

                    else:
                        messagebox.showerror('error', 'nurse id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')        
            Label(tu2, padx=10, text="Enter the Nurse id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu2,textvariable = nid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                tu2.withdraw()
            Button(tu2,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t2.deiconify()
                tu2.withdraw()
            Button(tu2,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tu2,text="ENTER",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run1).pack(pady=20)

        def upPatient():
            t2.withdraw()
            tu3=Toplevel(t2)
            tu3.geometry('1080x500')
            x_Left = int(tu3.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tu3.winfo_screenheight()/2 - 500/2)
            tu3.geometry("+{}+{}".format(x_Left, y_Top))
            tu3.resizable(False, False)
            tu3.title("Update in Patient")
            Label(tu3,image=logo).place(x=0,y=0)
            pid_var=StringVar()
            def run1():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select patient_id from patient;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(pid_var.get())
                    z=True
                except:
                    z=False
                if z and int(pid_var.get())>=0:
                    if y:
                        tuu3=Toplevel(tu3)
                        tuu3.geometry('1080x500')
                        x_Left = int(tuu3.winfo_screenwidth()/2 - 1080/2)
                        y_Top = int(tuu3.winfo_screenheight()/2 - 500/2)
                        tuu3.geometry("+{}+{}".format(x_Left, y_Top))
                        tuu3.resizable(False, False)
                        tuu3.title("Update in Patient")
                        Label(tuu3,image=logo).place(x=0,y=0)
                        v = tk.StringVar()
                        pname_var=tk.StringVar()
                        did_var=tk.StringVar()
                        roomnum_var=tk.StringVar()
                        v.set("false")
                        
                        def run():
                                z1=False
                                b=False
                                z2=False
                                try:
                                    try:
                                        int(did_var.get())
                                        int(roomnum_var.get())
                                        a=True
                                    except:
                                        a=False
                                    conn=sqlite3.connect('Hospital.dp')
                                    c=conn.cursor()
                                    for x in c.execute('''select doctor_id from doctor;'''):
                                        if str(x) == '('+did_var.get()+',)':
                                            z2=True
                                            break
                                    for x in c.execute('''select room_number from roomm;'''):
                                        if str(x) == '('+roomnum_var.get()+',)':
                                            z1=True
                                            break
                                    for x in c.execute('''select gender from roomm where room_number = ?;''', (roomnum_var.get(),)):
                                        n='(\''+v.get()+'\',)'
                                        if str(x) == n:
                                            b=True
                                            break
                                    conn.close()
                                    
                                    if z1:
                                        if z2:
                                            if a and int(did_var.get())>=0 and int(roomnum_var.get())>=0:
                                                if b:
                                                    conn=sqlite3.connect('Hospital.dp')
                                                    c=conn.cursor()
                                                    c.execute('''update patient
                                                    set patient_name  = ?, d_id  = ?,patient_DOB  = ?,patient_gender  = ?,room_number = ?
                                                    WHERE patient_id = ?;''', (pname_var.get(),did_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),v.get(),roomnum_var.get(),pid_var.get()))
                                                    conn.commit()
                                                    tuu3.withdraw()
                                                    messagebox.showinfo("Information","the record has been updated successfully")
                                                else:
                                                    if v.get() == 'Male':
                                                        messagebox.showerror('error', 'sorry but this room isn\'t for Male')
                                                    elif v.get() == 'Female':
                                                        messagebox.showerror('error', 'sorry but this room isn\'t for Female')
                                            else:
                                                messagebox.showerror('error', 'invalid value')
                                        else:
                                            messagebox.showerror('error', 'doctor id don\'t exist')
                                    else:
                                        messagebox.showerror('error', 'room number don\'t exist')
                                except sqlite3.IntegrityError:
                                    messagebox.showerror('error', 'the room isn\'t available')
                            
                        Label(tuu3, padx=10, text="Patient name:").grid(row=1, column=0,pady=20)
                        Entry(tuu3,textvariable = pname_var,fg="#4b9085").grid(row=1, column=1,pady=20)
                        Label(tuu3, padx=10, text="Doctor id:").grid(row=2, column=0,pady=20)
                        Entry(tuu3,textvariable = did_var,fg="#4b9085").grid(row=2, column=1,pady=20)
                        Label(tuu3, padx=10, text="Patient DOB:").grid(row=3, column=0,pady=20)
                        Combo1 = ttk.Combobox(tuu3, values = l1, state='readonly')
                        Combo1.set("1")
                        Combo1.grid(row=3, column=1,pady=20)

                        Combo2 = ttk.Combobox(tuu3, values = l2, state='readonly')
                        Combo2.set("1")
                        Combo2.grid(row=3, column=2,pady=20)

                        Combo3 = ttk.Combobox(tuu3, values = l3, state='readonly')
                        Combo3.set("1970")
                        Combo3.grid(row=3, column=3,pady=20)
                        Label(tuu3, padx=10, text="Gender:").grid(row=4, column=0,pady=20)
                        r1=tk.Radiobutton(tuu3, text="Male",variable=v, value="Male").grid(row=4, column=1,pady=20)
                        r2=tk.Radiobutton(tuu3, text="Female",variable=v, value="Female").grid(row=4, column=2,pady=20)
                        v.set("Male")
                        Label(tuu3, padx=10, text="Room number:").grid(row=5, column=0,pady=20)
                        Entry(tuu3,textvariable = roomnum_var,fg="#4b9085").grid(row=5, column=1,pady=20)
                        Button(tuu3,text="UPDATE",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=run).grid(row=6,column=4,pady=150)

                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(tu3, padx=10, text="Enter the Patient id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu3,textvariable = pid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                tu3.withdraw()
            Button(tu3,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t2.deiconify()
                tu3.withdraw()
            Button(tu3,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tu3,text="ENTER",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run1).pack(pady=40)

        def upmedical_prescription():
            t2.withdraw()
            tu4=Toplevel(t2)
            tu4.geometry('1080x500')
            x_Left = int(tu4.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tu4.winfo_screenheight()/2 - 500/2)
            tu4.geometry("+{}+{}".format(x_Left, y_Top))
            tu4.resizable(False, False)
            tu4.title("Update in Medical Prescription")
            Label(tu4,image=logo).place(x=0,y=0)
            pid_var=StringVar()
            mid_var=StringVar()
            def run1():
                y=False
                b=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select patient_id from medical_prescription;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                for x in c.execute('''select medicine_id  from medical_prescription where patient_id = ?;''',(pid_var.get(),)):
                    if str(x) == '('+mid_var.get()+',)':
                        b=True
                        break
                conn.close()
                try:
                    int(pid_var.get())
                    int(mid_var.get())
                    z=True
                except:
                    z=False
                if z and int(pid_var.get())>=0 and int(mid_var.get())>=0:
                    if y:
                        if b:
                            tuu4=Toplevel(tu4)
                            tuu4.geometry('1080x500')
                            x_Left = int(tuu4.winfo_screenwidth()/2 - 1080/2)
                            y_Top = int(tuu4.winfo_screenheight()/2 - 500/2)
                            tuu4.geometry("+{}+{}".format(x_Left, y_Top))
                            tuu4.resizable(False, False)
                            tuu4.title("Update in Medical Prescription")
                            Label(tuu4,image=logo).place(x=0,y=0)
                            mmid_var=tk.StringVar()
                            def run():
                                z1=False
                                try:
                                    int(mmid_var.get())
                                    a=True
                                except:
                                    a=False
                                conn=sqlite3.connect('Hospital.dp')
                                c=conn.cursor()                
                                for x in c.execute('''select medicine_id from medicine;'''):
                                    if str(x) == '('+mmid_var.get()+',)':
                                        z1=True
                                        break
                                conn.close()
                                if a and int(mmid_var.get())>=0: 
                                    if z1:
                                        conn=sqlite3.connect('Hospital.dp')
                                        c=conn.cursor()
                                        c.execute("update medical_prescription set medicine_id = ? where Patient_id = ? and medicine_id = ?;", (mmid_var.get(),pid_var.get(), mid_var.get()))
                                        conn.commit()
                                        conn.close()
                                        tuu4.withdraw()
                                        messagebox.showinfo("Information","the record has been updated successfully")
                                    else:
                                        messagebox.showerror('error', 'medicine id don\'t exist')
                                else:
                                    messagebox.showerror('error', 'invalid value')
                                
                            Label(tuu4, padx=10, text="Medicine id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
                            Entry(tuu4,textvariable = mmid_var,width=50,fg="#4b9085").pack()

                            Button(tuu4,text="UPDATE",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=run).pack(pady=40)

                        else:
                            messagebox.showerror('error', 'medicine id don\'t exist')
                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')


            Label(tu4, padx=10, text="Enter the patient id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu4,textvariable = pid_var,width=50,fg="#4b9085").pack()
            Label(tu4, padx=10, text="Enter the medicine id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu4,textvariable = mid_var,width=50,fg="#4b9085").pack()

            def showroot():
                root.deiconify()
                tu4.withdraw()
            Button(tu4,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t2.deiconify()
                tu4.withdraw()
            Button(tu4,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tu4,text="ENTER",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run1).pack(pady=40)

        def upMedicine():
            t2.withdraw()
            tu5=Toplevel(t2)
            tu5.geometry('1080x500')
            x_Left = int(tu5.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tu5.winfo_screenheight()/2 - 500/2)
            tu5.geometry("+{}+{}".format(x_Left, y_Top))
            tu5.resizable(False, False)
            tu5.title("Update in Medicine")
            Label(tu5,image=logo).place(x=0,y=0)
            mid_var=StringVar()
            def run1():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select medicine_id from medicine;'''):
                    if str(x) == '('+mid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(mid_var.get())
                    z=True
                except:
                    z=False
                if z and int(mid_var.get())>=0:
                    if y:
                        tuu5=Toplevel(tu5)
                        tuu5.geometry('1080x500')
                        x_Left = int(tuu5.winfo_screenwidth()/2 - 1080/2)
                        y_Top = int(tuu5.winfo_screenheight()/2 - 500/2)
                        tuu5.geometry("+{}+{}".format(x_Left, y_Top))
                        tuu5.resizable(False, False)
                        tuu5.title("Update in Medicine")
                        Label(tuu5,image=logo).place(x=0,y=0)
                        v = tk.StringVar()
                        mname_var=tk.StringVar()
                        exp_var=tk.StringVar()
                        v.set("false")
                        def run():
                                try:
                                    int(exp_var.get())
                                    a=True
                                except:
                                    a=False
                                if a and int(exp_var.get())>=0:
                                    conn=sqlite3.connect('Hospital.dp')
                                    c=conn.cursor()
                                    c.execute('''update medicine
                                    set medicine_name = ?, date_of_produce = ?,expire_after = ?
                                    WHERE medicine_id = ?;''', (mname_var.get(),Combo1.get()+"/"+Combo2.get()+"/"+Combo3.get(),exp_var.get()+v.get(),mid_var.get()))
                                    conn.commit()
                                    conn.close()
                                    tuu5.withdraw()
                                    messagebox.showinfo("Information","the record has been updated successfully")
                                else:
                                    messagebox.showerror('error', 'invalid value')
                            
                        Label(tuu5, padx=10, text="Medicine name:").grid(row=1, column=0,pady=20)
                        Entry(tuu5,textvariable = mname_var,fg="#4b9085").grid(row=1, column=1,pady=20)
                        Label(tuu5, padx=10, text="Date Of Produce:").grid(row=2, column=0,pady=20)
                        Combo1 = ttk.Combobox(tuu5, values = l1, state='readonly')
                        Combo1.set("1")
                        Combo1.grid(row=2, column=1,pady=20)

                        Combo2 = ttk.Combobox(tuu5, values = l2, state='readonly')
                        Combo2.set("1")
                        Combo2.grid(row=2, column=2,pady=20)

                        Combo3 = ttk.Combobox(tuu5, values = l3, state='readonly')
                        Combo3.set("1970")
                        Combo3.grid(row=2, column=3,pady=20)
                        Label(tuu5, padx=10, text="Expire After:").grid(row=3, column=0,pady=20)
                        Entry(tuu5,textvariable = exp_var,fg="#4b9085").grid(row=3, column=1,pady=20)
                        tk.Radiobutton(tuu5, text="weeks",variable=v, value="weeks").grid(row=3, column=2,pady=20)
                        tk.Radiobutton(tuu5, text="Months",variable=v, value="Months").grid(row=3, column=3,pady=20)
                        tk.Radiobutton(tuu5, text="years",variable=v, value="years").grid(row=3, column=4,pady=20)
                        v.set("weeks")
                        Button(tuu5,text="UPDATE",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=run).grid(row=6,column=4,pady=150)


                    else:
                        messagebox.showerror('error', 'medicine id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
            Label(tu5, padx=10, text="Enter the Medicine id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu5,textvariable = mid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                tu5.withdraw()
            Button(tu5,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t2.deiconify()
                tu5.withdraw()
            Button(tu5,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tu5,text="ENTER",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run1).pack(pady=20)
        def upRoom():
            t2.withdraw()
            tu6=Toplevel(t2)
            tu6.geometry('1080x500')
            x_Left = int(tu6.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tu6.winfo_screenheight()/2 - 500/2)
            tu6.geometry("+{}+{}".format(x_Left, y_Top))
            tu6.resizable(False, False)
            tu6.title("Update in Room")
            Label(tu6,image=logo).place(x=0,y=0)
            roomnum_var=StringVar()
            def run1():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select room_number from roomm;'''):
                    if str(x) == '('+roomnum_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(roomnum_var.get())
                    z=True
                except:
                    z=False
                if z and int(roomnum_var.get())>=0:
                    if y:
                        tuu6=Toplevel(tu6)
                        tuu6.geometry('1080x500')
                        x_Left = int(tuu6.winfo_screenwidth()/2 - 1080/2)
                        y_Top = int(tuu6.winfo_screenheight()/2 - 500/2)
                        tuu6.geometry("+{}+{}".format(x_Left, y_Top))
                        tuu6.resizable(False, False)
                        tuu6.title("Update in Room")
                        Label(tuu6,image=logo).place(x=0,y=0)
                        v = tk.StringVar()
                        dep_var=tk.StringVar()
                        v.set("false")
                        def run():
                            conn=sqlite3.connect('Hospital.dp')
                            c=conn.cursor()
                            c.execute('''update roomm
                            set department   = ?, gender   = ?
                            WHERE room_number = ?;''', (dep_var.get(), v.get(),roomnum_var.get()))
                            conn.commit()
                            conn.close()
                            tuu6.withdraw()
                            messagebox.showinfo("Information","the record has been updated successfully")
                        Label(tuu6, padx=10, text="Department:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
                        Entry(tuu6,textvariable = dep_var,fg="#4b9085",width=50).pack()
                        Label(tuu6, padx=10, text="Gender:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack()
                        tk.Radiobutton(tuu6, text="Male",variable=v, value="Male").pack(pady=20)
                        tk.Radiobutton(tuu6, text="Female",variable=v, value="Female").pack()
                        v.set("Male")
                        Button(tuu6,text="UPDATE",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=run).pack(pady=20)

                    else:
                        messagebox.showerror('error', 'room number id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(tu6, padx=10, text="Enter the Room Number:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tu6,textvariable = roomnum_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                tu6.withdraw()
            Button(tu6,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t2.deiconify()
                tu6.withdraw()
            Button(tu6,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tu6,text="ENTER",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run1).pack(pady=40)



        Label(t2, padx=10, text="Chose from the next four buttons to update into:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack()
        def showt1():
            root.deiconify()
            t2.withdraw()
        Button(t2,text="<--BACK",font=("times",16),fg="white",bg="#d49898", relief=GROOVE  ,command=showt1).pack(side="bottom")
        Button(t2,text="Nurse",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=upNurse).pack(side="left",padx=40)
        Button(t2,text="Doctor",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=upDoctor).pack(side="left",padx=40)
        Button(t2,text="Room",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=upRoom).pack(side="left",padx=40)
        Button(t2,text="Patient",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=upPatient).pack(side="left",padx=40)
        Button(t2,text="Medicine",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=upMedicine).pack(side="left",padx=40)
        Button(t2,text="Medical Prescription",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=upmedical_prescription).pack(side="left",padx=40)
    else:
        messagebox.showerror('error', 'THERE IS NO TABLE TO UPDATE INTO')
    

##################################################################################################################################
def view():
    if l:
        root.withdraw()
        t3=Toplevel(root)
        t3.geometry('1080x500')
        x_Left = int(t3.winfo_screenwidth()/2 - 1080/2)
        y_Top = int(t3.winfo_screenheight()/2 - 500/2)
        t3.geometry("+{}+{}".format(x_Left, y_Top))
        t3.resizable(False, False)
        t3.title("View")
        Label(t3,image=logo).place(x=0,y=0)
        def vDoctor():
            t3.withdraw()
            tv1=Toplevel(t3)
            tv1.geometry('1080x500')
            x_Left = int(tv1.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tv1.winfo_screenheight()/2 - 500/2)
            tv1.geometry("+{}+{}".format(x_Left, y_Top))
            tv1.resizable(False, False)
            tv1.title("View in Doctor")
            Label(tv1,image=logo).place(x=0,y=0)
            did_var=StringVar()
            def runall():
                T.config(state='normal')
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x1 in c.execute('''select * from doctor;'''):
                    T.insert(END, x1)
                    T.insert(END, "\n")
                conn.close()
                T.config(state=DISABLED)  
            def clear():
                T.config(state='normal')
                T.delete('1.0', END)
                T.config(state=DISABLED)   
            def run():
                T.config(state='normal')
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select doctor_id from doctor;'''):
                    if str(x) == '('+did_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(did_var.get())
                    z=True
                except:
                    z=False
                if z and int(did_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x1 in c.execute('''select doctor_id  from doctor where doctor_id = ?;''', (did_var.get(),)):
                            T.insert(END, "ID: ")
                            T.insert(END, x1)
                            for x2 in c.execute('''select doctor_name  from doctor where doctor_id = ?;''', (did_var.get(),)):
                                T.insert(END, "  Name: ")
                                T.insert(END, x2)
                                for x3 in c.execute('''select n_id  from doctor where doctor_id = ?;''', (did_var.get(),)):
                                    T.insert(END, "  Nurse ID: ")
                                    T.insert(END, x3)
                                    for x4 in c.execute('''select doctor_DOB from doctor where doctor_id = ?;''', (did_var.get(),)):
                                        T.insert(END, "  DOB: ")
                                        T.insert(END, x4)
                                        for x5 in c.execute('''select doctor_gender from doctor where doctor_id = ?;''', (did_var.get(),)):
                                            T.insert(END, "  Gender: ")
                                            T.insert(END, x5)
                                            for x6 in c.execute('''select salary from doctor where doctor_id = ?;''', (did_var.get(),)):
                                                T.insert(END, "  Salary: ")
                                                T.insert(END, x6)
                                                T.insert(END, "\n")
                        conn.close()
                    else:
                        messagebox.showerror('error', 'doctor id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                T.config(state=DISABLED)
            S = Scrollbar(tv1)
            S.pack(side='right', fill=Y)
            Label(tv1, padx=10, text="Enter the Doctor id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tv1,textvariable = did_var,width=50,fg="#4b9085").pack()
            T = Text(tv1, height=5, width=100,fg="#4b9085")
            T.pack(pady=20)
            S.config(command=T.yview)
            T.config(yscrollcommand=S.set)
            #Button(tv1,text="view",font=("times",16),fg="white",bg="#679878", relief=GROOVE  ,command=view).place(x=)
            T.config(state=DISABLED)   
            def showroot():
                root.deiconify()
                tv1.withdraw()
            Button(tv1,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t3.deiconify()
                tv1.withdraw()
            Button(tv1,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tv1,text="VIEW RECORD",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=20)
            Button(tv1,text="VIEW ALL RECORDS",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=runall).pack(pady=20)
            Button(tv1,text="CLEAR",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=clear).pack(pady=20)

        def vNurse():
            t3.withdraw()
            tv2=Toplevel(t3)
            tv2.geometry('1080x500')
            x_Left = int(tv2.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tv2.winfo_screenheight()/2 - 500/2)
            tv2.geometry("+{}+{}".format(x_Left, y_Top))
            tv2.resizable(False, False)
            tv2.title("View in Nurse")
            Label(tv2,image=logo).place(x=0,y=0)
            nid_var=StringVar()
            def runall():
                T.config(state='normal')
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x1 in c.execute('''select * from nurse;'''):
                    T.insert(END, x1)
                    T.insert(END, "\n")
                conn.close()
                T.config(state=DISABLED)  

            def clear():
                T.config(state='normal')
                T.delete('1.0', END)
                T.config(state=DISABLED)   
            def run():
                T.config(state='normal')
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select nurse_id from nurse;'''):
                    if str(x) == '('+nid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(nid_var.get())
                    z=True
                except:
                    z=False
                if z and int(nid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x1 in c.execute('''select nurse_id from nurse where nurse_id = ?;''', (nid_var.get(),)):
                            T.insert(END, "ID: ")
                            T.insert(END, x1)
                            for x2 in c.execute('''select nurse_name from nurse where nurse_id = ?;''', (nid_var.get(),)):
                                T.insert(END, "  Name: ")
                                T.insert(END, x2)
                                for x3 in c.execute('''select nurse_DOB from nurse where nurse_id = ?;''', (nid_var.get(),)):
                                    T.insert(END, "  DOB: ")
                                    T.insert(END, x3)
                                    for x4 in c.execute('''select nurse_gender from nurse where nurse_id = ?;''', (nid_var.get(),)):
                                        T.insert(END, "  Gender: ")
                                        T.insert(END, x4)
                                        for x5 in c.execute('''select salary from nurse where nurse_id = ?;''', (nid_var.get(),)):
                                            T.insert(END, "  Salary: ")
                                            T.insert(END, x5)
                                            T.insert(END, "\n")
                        conn.close()
                    else:
                        messagebox.showerror('error', 'nurse id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                T.config(state=DISABLED)                
            S = Scrollbar(tv2)
            S.pack(side='right', fill=Y)
            Label(tv2, padx=10, text="Enter the Nurse id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tv2,textvariable = nid_var,width=50,fg="#4b9085").pack()
            T = Text(tv2, height=5, width=100,fg="#4b9085")
            T.pack(pady=20)
            S.config(command=T.yview)
            T.config(yscrollcommand=S.set)
            T.config(state=DISABLED)   
            def showroot():
                root.deiconify()
                tv2.withdraw()
            Button(tv2,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t3.deiconify()
                tv2.withdraw()
            Button(tv2,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tv2,text="VIEW RECORD",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=20)
            Button(tv2,text="VIEW ALL RECORDS",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=runall).pack(pady=20)
            Button(tv2,text="CLEAR",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=clear).pack(pady=20)

        def vPatient():
            t3.withdraw()
            tv3=Toplevel(t3)
            tv3.geometry('1080x500')
            x_Left = int(tv3.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tv3.winfo_screenheight()/2 - 500/2)
            tv3.geometry("+{}+{}".format(x_Left, y_Top))
            tv3.resizable(False, False)
            tv3.title("View in Patient")
            Label(tv3,image=logo).place(x=0,y=0)
            pid_var=StringVar()
            def runall():
                T.config(state='normal')
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x1 in c.execute('''select * from patient;'''):
                    T.insert(END, x1)
                    T.insert(END, "\n")
                conn.close()
                T.config(state=DISABLED)  

            def clear():
                T.config(state='normal')
                T.delete('1.0', END)
                T.config(state=DISABLED)   
            def run():
                T.config(state='normal')
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select patient_id from patient;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(pid_var.get())
                    z=True
                except:
                    z=False
                if z and int(pid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x1 in c.execute('''select patient_id from patient where patient_id = ?;''', (pid_var.get(),)):
                            T.insert(END, "ID: ")
                            T.insert(END, x1)
                            for x2 in c.execute('''select patient_name from patient where patient_id = ?;''', (pid_var.get(),)):
                                T.insert(END, "  Name: ")
                                T.insert(END, x2)
                                for x3 in c.execute('''select d_id from patient where patient_id = ?;''', (pid_var.get(),)):
                                    T.insert(END, "  Doctor ID: ")
                                    T.insert(END, x3)
                                    for x4 in c.execute('''select patient_DOB from patient where patient_id = ?;''', (pid_var.get(),)):
                                        T.insert(END, "  DOB: ")
                                        T.insert(END, x4)
                                        for x7 in c.execute('''select patient_DOE from patient where patient_id = ?;''', (pid_var.get(),)):
                                            T.insert(END, "  Date of Entring: ")
                                            T.insert(END, x7)
                                            for x5 in c.execute('''select patient_gender from patient where patient_id = ?;''', (pid_var.get(),)):
                                                T.insert(END, "  Gender: ")
                                                T.insert(END, x5)
                                                for x6 in c.execute('''select room_number from patient where patient_id = ?;''', (pid_var.get(),)):
                                                    T.insert(END, "  Room Number: ")
                                                    T.insert(END, x6)
                                                    T.insert(END, "\n")

                        conn.close()
                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                T.config(state=DISABLED)                
            S = Scrollbar(tv3)
            S.pack(side='right', fill=Y)
            Label(tv3, padx=10, text="Enter the Patient id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tv3,textvariable = pid_var,width=50,fg="#4b9085").pack()
            T = Text(tv3, height=5, width=120,fg="#4b9085")
            T.pack(pady=20)
            S.config(command=T.yview)
            T.config(yscrollcommand=S.set)
            T.config(state=DISABLED)   
            def showroot():
                root.deiconify()
                tv3.withdraw()
            Button(tv3,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t3.deiconify()
                tv3.withdraw()
            Button(tv3,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tv3,text="VIEW RECORD",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=20)
            Button(tv3,text="VIEW ALL RECORDS",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=runall).pack(pady=20)
            Button(tv3,text="CLEAR",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=clear).pack(pady=20)

        def vmedical_prescription():
            t3.withdraw()
            tv4=Toplevel(t3)
            tv4.geometry('1080x500')
            x_Left = int(tv4.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tv4.winfo_screenheight()/2 - 500/2)
            tv4.geometry("+{}+{}".format(x_Left, y_Top))
            tv4.resizable(False, False)
            tv4.title("View in Medical Prescription")
            Label(tv4,image=logo).place(x=0,y=0)
            pid_var=StringVar()
            def runall():
                T.config(state='normal')
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x1 in c.execute('''select * from medical_prescription;'''):
                    T.insert(END, x1)
                    T.insert(END, "\n")
                conn.close()
                T.config(state=DISABLED)  

            def clear():
                T.config(state='normal')
                T.delete('1.0', END)
                T.config(state=DISABLED)   
            def run():
                T.config(state='normal')
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select Patient_id from medical_prescription;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(pid_var.get())
                    z=True
                except:
                    z=False
                if z and int(pid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x1 in c.execute('''select Patient_id from medical_prescription where Patient_id = ?;''', (pid_var.get(),)):
                            T.insert(END, "Patient ID: ")
                            T.insert(END, x1)
                            T.insert(END, "\n")
                            for x2 in c.execute('''select medicine_id from medical_prescription where Patient_id = ?;''', (pid_var.get(),)):
                                T.insert(END, "  Medicine ID: ")
                                T.insert(END, x2)
                                T.insert(END, "\n")
                        conn.close()
                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                T.config(state=DISABLED)                
            S = Scrollbar(tv4)
            S.pack(side='right', fill=Y)        
            Label(tv4, padx=10, text="Enter the patient id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tv4,textvariable = pid_var,width=50,fg="#4b9085").pack()
            T = Text(tv4, height=5, width=100,fg="#4b9085")
            T.pack(pady=20)
            S.config(command=T.yview)
            T.config(yscrollcommand=S.set)
            T.config(state=DISABLED)   
            def showroot():
                root.deiconify()
                tv4.withdraw()
            Button(tv4,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t3.deiconify()
                tv4.withdraw()
            Button(tv4,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tv4,text="VIEW RECORD",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=20)
            Button(tv4,text="VIEW ALL RECORDS",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=runall).pack(pady=20)
            Button(tv4,text="CLEAR",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=clear).pack(pady=20)
            ####################################################################################
        def vMedicine():
            t3.withdraw()
            tv5=Toplevel(t3)
            tv5.geometry('1080x500')
            x_Left = int(tv5.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tv5.winfo_screenheight()/2 - 500/2)
            tv5.geometry("+{}+{}".format(x_Left, y_Top))
            tv5.resizable(False, False)
            tv5.title("View in Medicine")
            Label(tv5,image=logo).place(x=0,y=0)
            mid_var=StringVar()
            def runall():
                T.config(state='normal')
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x1 in c.execute('''select * from medicine;'''):
                    T.insert(END, x1)
                    T.insert(END, "\n")
                conn.close()
                T.config(state=DISABLED)  
            def clear():
                T.config(state='normal')
                T.delete('1.0', END)
                T.config(state=DISABLED)   
            def run():
                T.config(state='normal')
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select medicine_id from medicine;'''):
                    if str(x) == '('+mid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(mid_var.get())
                    z=True
                except:
                    z=False
                if z and int(mid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x1 in c.execute('''select medicine_id from medicine where medicine_id = ?;''', (mid_var.get(),)):
                            T.insert(END, "ID: ")
                            T.insert(END, x1)
                            for x2 in c.execute('''select medicine_name from medicine where medicine_id = ?;''', (mid_var.get(),)):
                                T.insert(END, "  Name: ")
                                T.insert(END, x2)
                                for x3 in c.execute('''select date_of_produce from medicine where medicine_id = ?;''', (mid_var.get(),)):
                                    T.insert(END, "  DOP: ")
                                    T.insert(END, x3)
                                    for x4 in c.execute('''select expire_after from medicine where medicine_id = ?;''', (mid_var.get(),)):
                                        T.insert(END, "  Expire After: ")
                                        T.insert(END, x4)
                                        T.insert(END, "\n")
                        conn.close()
                    else:
                        messagebox.showerror('error', 'medicine id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                T.config(state=DISABLED)                
            S = Scrollbar(tv5)
            S.pack(side='right', fill=Y)
            Label(tv5, padx=10, text="Enter the Medicine id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tv5,textvariable = mid_var,width=50,fg="#4b9085").pack()
            T = Text(tv5, height=5, width=100,fg="#4b9085")
            T.pack(pady=20)
            S.config(command=T.yview)
            T.config(yscrollcommand=S.set)
            T.config(state=DISABLED)   
            def showroot():
                root.deiconify()
                tv5.withdraw()
            Button(tv5,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t3.deiconify()
                tv5.withdraw()
            Button(tv5,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tv5,text="VIEW RECORD",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=20)
            Button(tv5,text="VIEW ALL RECORDS",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=runall).pack(pady=20)
            Button(tv5,text="CLEAR",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=clear).pack(pady=20)
            ################################################################################
        def vRoom():
            t3.withdraw()
            tv6=Toplevel(t3)
            tv6.geometry('1080x500')
            x_Left = int(tv6.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(tv6.winfo_screenheight()/2 - 500/2)
            tv6.geometry("+{}+{}".format(x_Left, y_Top))
            tv6.resizable(False, False)
            tv6.title("View in Room")
            Label(tv6,image=logo).place(x=0,y=0)
            roomnum_var=StringVar()
            def runall():
                T.config(state='normal')
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x1 in c.execute('''select * from roomm;'''):
                    T.insert(END, x1)
                    T.insert(END, "\n")
                conn.close()
                T.config(state=DISABLED)  
            def clear():
                T.config(state='normal')
                T.delete('1.0', END)
                T.config(state=DISABLED)   
            def run():
                T.config(state='normal')
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select room_number from roomm;'''):
                    if str(x) == '('+roomnum_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(roomnum_var.get())
                    z=True
                except:
                    z=False
                if z and int(roomnum_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        for x1 in c.execute('''select room_number from roomm where room_number = ?;''', (roomnum_var.get(),)):
                            T.insert(END, "Room Number: ")
                            T.insert(END, x1)
                            for x2 in c.execute('''select department from roomm where room_number = ?;''', (roomnum_var.get(),)):
                                T.insert(END, "  Department: ")
                                T.insert(END, x2)
                                for x3 in c.execute('''select gender from roomm where room_number = ?;''', (roomnum_var.get(),)):
                                    T.insert(END, "  Gender: ")
                                    T.insert(END, x3)
                                    T.insert(END, "\n")
                        conn.close()
                    else:
                        messagebox.showerror('error', 'room number don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                T.config(state=DISABLED)                
            S = Scrollbar(tv6)
            S.pack(side='right', fill=Y)
            Label(tv6, padx=10, text="Enter the Room Number:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(tv6,textvariable = roomnum_var,width=50,fg="#4b9085").pack()
            T = Text(tv6, height=5, width=100,fg="#4b9085")
            T.pack(pady=20)
            S.config(command=T.yview)
            T.config(yscrollcommand=S.set)
            T.config(state=DISABLED)   
            def showroot():
                root.deiconify()
                tv6.withdraw()
            Button(tv6,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t3.deiconify()
                tv6.withdraw()
            Button(tv6,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(tv6,text="VIEW RECORD",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=20)
            Button(tv6,text="VIEW ALL RECORDS",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=runall).pack(pady=20)
            Button(tv6,text="CLEAR",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=clear).pack(pady=20)
            ################################################################################



        Label(t3, padx=10, text="Chose from the next four buttons to view from:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack()
        def showt1():
            root.deiconify()
            t3.withdraw()
        Button(t3,text="<--BACK",font=("times",16),fg="white",bg="#d49898", relief=GROOVE  ,command=showt1).pack(side="bottom")
        Button(t3,text="Nurse",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=vNurse).pack(side="left",padx=40)
        Button(t3,text="Doctor",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=vDoctor).pack(side="left",padx=40)
        Button(t3,text="Room",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=vRoom).pack(side="left",padx=40)
        Button(t3,text="Patient",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=vPatient).pack(side="left",padx=40)
        Button(t3,text="Medicine",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=vMedicine).pack(side="left",padx=40)
        Button(t3,text="Medical Prescription",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=vmedical_prescription).pack(side="left",padx=40)
    else:
        messagebox.showerror('error', 'THERE IS NO TABLE TO VIEW FROM')
    

##################################################################################################################################
def delete():
    if l:
        root.withdraw()
        t4=Toplevel(root)
        t4.geometry('1080x500')
        x_Left = int(t4.winfo_screenwidth()/2 - 1080/2)
        y_Top = int(t4.winfo_screenheight()/2 - 500/2)
        t4.geometry("+{}+{}".format(x_Left, y_Top))
        t4.resizable(False, False)
        t4.title("Delete")
        Label(t4,image=logo).place(x=0,y=0)
        def deDoctor():
            t4.withdraw()
            td1=Toplevel(t4)
            td1.geometry('1080x500')
            x_Left = int(td1.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(td1.winfo_screenheight()/2 - 500/2)
            td1.geometry("+{}+{}".format(x_Left, y_Top))
            td1.resizable(False, False)
            td1.title("Delete from Doctor")
            Label(td1,image=logo).place(x=0,y=0)
            did_var=StringVar()
            def run():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select doctor_id from doctor;'''):
                    if str(x) == '('+did_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(did_var.get())
                    z=True
                except:
                    z=False
                if z and int(did_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute('''delete from doctor where doctor_id = ?;''', (did_var.get(),))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been deleted successfully")
                    else:
                        messagebox.showerror('error', 'doctor id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(td1, padx=10, text="Enter the Doctor id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(td1,textvariable = did_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                td1.withdraw()
            Button(td1,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t4.deiconify()
                td1.withdraw()
            Button(td1,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(td1,text="DELETE",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=40)

        def deNurse():
            t4.withdraw()
            td2=Toplevel(t4)
            td2.geometry('1080x500')
            x_Left = int(td2.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(td2.winfo_screenheight()/2 - 500/2)
            td2.geometry("+{}+{}".format(x_Left, y_Top))
            td2.resizable(False, False)
            td2.title("Delete from Nurse")
            Label(td2,image=logo).place(x=0,y=0)
            nid_var=StringVar()
            def run():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select nurse_id from nurse;'''):
                    if str(x) == '('+nid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(nid_var.get())
                    z=True
                except:
                    z=False
                if z and int(nid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute('''delete from nurse where nurse_id = ?;''', (nid_var.get(),))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been deleted successfully")
                    else:
                        messagebox.showerror('error', 'nurse id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')
                    
            Label(td2, padx=10, text="Enter the Nurse id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(td2,textvariable = nid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                td2.withdraw()
            Button(td2,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t4.deiconify()
                td2.withdraw()
            Button(td2,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(td2,text="DELETE",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=40)

        def dePatient():
            t4.withdraw()
            td3=Toplevel(t4)
            td3.geometry('1080x500')
            x_Left = int(td3.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(td3.winfo_screenheight()/2 - 500/2)
            td3.geometry("+{}+{}".format(x_Left, y_Top))
            td3.resizable(False, False)
            td3.title("Delete from Patient")
            Label(td3,image=logo).place(x=0,y=0)
            pid_var=StringVar()
            def run():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select patient_id from patient;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(pid_var.get())
                    z=True
                except:
                    z=False
                if z and int(pid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute('''delete from patient where patient_id = ?;''', (pid_var.get(),))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been deleted successfully")
                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(td3, padx=10, text="Enter the Patient id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(td3,textvariable = pid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                td3.withdraw()
            Button(td3,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t4.deiconify()
                td3.withdraw()
            Button(td3,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(td3,text="DELETE",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=40)

        def demedical_prescription():
            t4.withdraw()
            td4=Toplevel(t4)
            td4.geometry('1080x500')
            x_Left = int(td4.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(td4.winfo_screenheight()/2 - 500/2)
            td4.geometry("+{}+{}".format(x_Left, y_Top))
            td4.resizable(False, False)
            td4.title("Delete from Medical Prescription")
            Label(td4,image=logo).place(x=0,y=0)
            pid_var=StringVar()
            def run():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select patient_id from medical_prescription;'''):
                    if str(x) == '('+pid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(pid_var.get())
                    z=True
                except:
                    z=False
                if z and int(pid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute('''delete from medical_prescription where patient_id = ?;''', (pid_var.get(),))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been deleted successfully")
                    else:
                        messagebox.showerror('error', 'patient id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')


            Label(td4, padx=10, text="Enter the patient id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(td4,textvariable = pid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                td4.withdraw()
            Button(td4,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t4.deiconify()
                td4.withdraw()
            Button(td4,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(td4,text="DELETE",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=40)
            ####################################################################################
        def deMedicine():
            t4.withdraw()
            td5=Toplevel(t4)
            td5.geometry('1080x500')
            x_Left = int(td5.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(td5.winfo_screenheight()/2 - 500/2)
            td5.geometry("+{}+{}".format(x_Left, y_Top))
            td5.resizable(False, False)
            td5.title("Delete from Medicine")
            Label(td5,image=logo).place(x=0,y=0)
            mid_var=StringVar()
            def run():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select medicine_id from medicine;'''):
                    if str(x) == '('+mid_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(mid_var.get())
                    z=True
                except:
                    z=False
                if z and int(mid_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute('''delete from medicine where medicine_id = ?;''', (mid_var.get(),))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been deleted successfully")
                    else:
                        messagebox.showerror('error', 'medicine id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(td5, padx=10, text="Enter the Medicine id:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(td5,textvariable = mid_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                td5.withdraw()
            Button(td5,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t4.deiconify()
                td5.withdraw()
            Button(td5,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(td5,text="DELETE",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=40)
            ################################################################################
        def deRoom():
            t4.withdraw()
            td6=Toplevel(t4)
            td6.geometry('1080x500')
            x_Left = int(td6.winfo_screenwidth()/2 - 1080/2)
            y_Top = int(td6.winfo_screenheight()/2 - 500/2)
            td6.geometry("+{}+{}".format(x_Left, y_Top))
            td6.resizable(False, False)
            td6.title("delete from room")
            Label(td6,image=logo).place(x=0,y=0)
            roomnum_var=StringVar()
            def run():
                y=False
                conn=sqlite3.connect('Hospital.dp')
                c=conn.cursor()
                for x in c.execute('''select room_number from roomm;'''):
                    if str(x) == '('+roomnum_var.get()+',)':
                        y=True
                        break
                conn.close()
                try:
                    int(roomnum_var.get())
                    z=True
                except:
                    z=False
                if z and int(roomnum_var.get())>=0:
                    if y:
                        conn=sqlite3.connect('Hospital.dp')
                        c=conn.cursor()
                        c.execute('''delete from roomm where room_number = ?;''', (roomnum_var.get(),))
                        conn.commit()
                        conn.close()
                        messagebox.showinfo("Information","the record has been deleted successfully")
                    else:
                        messagebox.showerror('error', 'room number id don\'t exist')
                else:
                    messagebox.showerror('error', 'invalid value')

            Label(td6, padx=10, text="Enter the Room Number:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack(pady=20)
            Entry(td6,textvariable = roomnum_var,width=50,fg="#4b9085").pack()
            def showroot():
                root.deiconify()
                td6.withdraw()
            Button(td6,text="EXIT",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=showroot).pack(side="right",pady=40)
            def showt1():
                t4.deiconify()
                td6.withdraw()
            Button(td6,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="left",pady=40)
            Button(td6,text="DELETE",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=run).pack(pady=40)
            ################################################################################



        Label(t4, padx=10, text="Chose from the next four buttons to delete from:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack()
        def showt1():
            root.deiconify()
            t4.withdraw()
        Button(t4,text="<--BACK",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=showt1).pack(side="bottom")
        Button(t4,text="Nurse",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=deNurse).pack(side="left",padx=40)
        Button(t4,text="Doctor",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=deDoctor).pack(side="left",padx=40)
        Button(t4,text="Room",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=deRoom).pack(side="left",padx=40)
        Button(t4,text="Patient",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=dePatient).pack(side="left",padx=40)
        Button(t4,text="Medicine",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=deMedicine).pack(side="left",padx=40)
        Button(t4,text="Medical Prescription",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=demedical_prescription).pack(side="left",padx=40)
    else:
        messagebox.showerror('error', 'THERE IS NO TABLE TO DELETE FROM')



"""========================================================================================================================="""

Label(root, padx=10, text="Chose from the next four buttons:",bg="#ddedea",fg="#4b9085", font=("Times",24, 'bold')).pack()
Button(root,text="Click here to close the program",fg="white",bg="#b02121", relief=GROOVE  ,font=("times",16),command=quit).pack(side="bottom",padx=40)
Button(root,text="Click here to creat tables",fg="white",bg="#679878", relief=GROOVE  ,font=("times",16),command=creat).place(x=857,y=460)
Button(root,text="Click here to drop tables",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",16),command=drop).place(x=0,y=460)
Button(root,text="?",fg="white",bg="#d49898", relief=GROOVE  ,font=("times",20),command=about).place(x=1040,y=0)
Button(root,text="Click here to  insert",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=insert).pack(side="left",padx=40)#pack(side="left",padx=60)
Button(root,text="Click here to  update",fg="white",bg="#5d6cff", relief=GROOVE,font=("times",16),command=update).pack(side="left",padx=40)
Button(root,text="Click here to  view",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=view).pack(side="left",padx=40)
Button(root,text="Click here to delete",fg="white",bg="#5d6cff", relief=GROOVE  ,font=("times",16),command=delete).pack(side="left",padx=40)
    
root.mainloop
