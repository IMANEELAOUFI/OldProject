@extends('layouts.master')
@section('title')
  admin 
@endsection

@section('content')
    

<div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title"> utilisateurs</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>
                        Name
                      </th>
                      <th>
                        email
                      </th>
                      <th>
                        téléphone
                      </th>
                     
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          houda el asri
                        </td>
                        <td>
                         houdadeust@gmail.com
                        </td>
                        <td>
                         0632466248
                        </td>
                        
                      </tr>
                      
                      
                     
                      
                      <tr>
                        <td>
                          Imane elaoufi
                        </td>
                        <td>
                          imane@gmail.com
                        </td>
                        <td>
                          0661958700
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        @endsection
@section('scripts')
    
@endsection