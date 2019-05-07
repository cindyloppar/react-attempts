public class Student {

    public String getName() {
        return name;
    }

    private String name;
  private double marks;
  private int age;


  Student(String name, double marks, int age){

      this.name = name;
      this.marks = marks;
      this.age = age;

  }

  public void getStudentsInfo(){
      System.out.println(this.name + this.marks + this.age);
  }
}
