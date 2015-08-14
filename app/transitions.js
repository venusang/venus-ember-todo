export default function(){
 //  this.transition(
 //    this.hasClass('completed2'),
 //    this.toValue(true),
 //    this.use('fade', { duration: 500 })
	// );
   this.transition(
    this.fromRoute('todos.complete'),
    this.toRoute('todos.active'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
