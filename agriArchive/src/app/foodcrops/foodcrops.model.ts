export class FoodcropsModel{
    getProduct(id: any) {
      throw new Error("Method not implemented.");
    }
    constructor
    (
        
        public Portrayal:string,
        public Crop:string,
        public SowingSeason:string,
        public HarvestingSeason:string,
        public CultivationPractice:string,
        // public Normallyaffecteddisease:string,
        public type:string
    )
    {}
}