import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
  selector: "shared-search-box",
  templateUrl: "./search-box.component.html"
})
export class SearchBoxComponent {
  @Output()
  onValue = new EventEmitter<string>()

  @Input()
  placeholder: string = ""

  emitValue(term: string): void {
    this.onValue.emit(term)
  }
}
