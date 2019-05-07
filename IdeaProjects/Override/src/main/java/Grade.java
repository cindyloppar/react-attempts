import java.util.ArrayList;

public class Grade {

    private ArrayList<Student> students;
    private int grade;
    Grade(int grade, Student student){

        this.grade = grade;
        this.students  = new ArrayList<>();
        addingStudents(student);
    }

    private void addingStudents(Student student){
        this.students.add(student);

    }

    public void getListOfStudents(){
        for(Student student : students){
            System.out.println(student.getName());
        }
    }

}
