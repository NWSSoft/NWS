public with sharing class Opportunitycontroller {
    @AuraEnabled(Cacheable = true)
    public static List<Opportunity> getAllStages(){
       return [SELECT Name, StageName FROM Opportunity ORDER BY Name];
    }
}