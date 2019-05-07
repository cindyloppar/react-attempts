import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        Student student1 = new Student("Cindy", 80, 17);
        student1.getStudentsInfo();

        Student student2 = new Student("Tumi", 80, 17);

        Grade grade8 = new Grade(8 , student1);

        Grade grade = new Grade(8 , student2);

        grade8.getListOfStudents();


    }


}

